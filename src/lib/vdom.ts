export type VNode = {
  type: string;
  props: Record<string, any>;
  children: (VNode | string | number)[];
};

export function h(type: string, props: Record<string, any> | null, ...children: any[]): VNode {
  const flatChildren = children.flat().filter(c => c != null && c !== false);
  return { type, props: props || {}, children: flatChildren };
}

export function createElement(vnode: VNode | string | number): HTMLElement | Text {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return document.createTextNode(String(vnode));
  }

  const $el = document.createElement(vnode.type);

  for (const [k, v] of Object.entries(vnode.props)) {
    if (k.startsWith('on') && typeof v === 'function') {
      const eventName = k.toLowerCase();
      // @ts-ignore
      $el[eventName] = v;
    } else if (k === 'className') {
      $el.className = v;
    } else {
      $el.setAttribute(k, v);
    }
  }

  for (const child of vnode.children) {
    const $child = createElement(child);
    if ($child) $el.appendChild($child);
  }

  return $el;
}

export function updateElement($parent: HTMLElement, newNode: VNode | string | number | undefined, oldNode?: VNode | string | number | undefined, index: number = 0) {
  if (newNode === undefined) {
    if ($parent.childNodes[index]) {
      $parent.removeChild($parent.childNodes[index]);
    }
  } else if (oldNode === undefined) {
    $parent.appendChild(createElement(newNode));
  } else if (typeof newNode === 'string' || typeof oldNode === 'string' || typeof newNode === 'number' || typeof oldNode === 'number') {
    if (String(newNode) !== String(oldNode)) {
      if ($parent.childNodes[index]) {
        $parent.replaceChild(createElement(newNode), $parent.childNodes[index]);
      } else {
        $parent.appendChild(createElement(newNode));
      }
    }
  } else if (newNode.type !== oldNode.type) {
    if ($parent.childNodes[index]) {
      $parent.replaceChild(createElement(newNode), $parent.childNodes[index]);
    }
  } else {
    const $element = $parent.childNodes[index] as HTMLElement;
    if ($element) {
      updateProps($element, newNode.props, oldNode.props);
      const newLength = newNode.children?.length || 0;
      const oldLength = oldNode.children?.length || 0;
      for (let i = 0; i < newLength || i < oldLength; i++) {
        updateElement(
          $element,
          newNode.children[i],
          oldNode.children[i],
          i
        );
      }
    }
  }
}

function updateProps($target: HTMLElement, newProps: Record<string, any>, oldProps: Record<string, any>) {
  const props = { ...oldProps, ...newProps };
  for (const name in props) {
    const newValue = newProps[name];
    const oldValue = oldProps[name];
    
    if (newValue === undefined || newValue === null) {
      if (name.startsWith('on')) {
         const eventName = name.toLowerCase();
         // @ts-ignore
         $target[eventName] = null;
      } else {
         $target.removeAttribute(name === 'className' ? 'class' : name);
      }
    } else if (oldValue !== newValue) {
      if (name.startsWith('on') && typeof newValue === 'function') {
         const eventName = name.toLowerCase();
         // @ts-ignore
         $target[eventName] = newValue;
      } else if (name === 'className') {
         $target.className = newValue;
      } else {
         $target.setAttribute(name, newValue);
      }
    }
  }
}
