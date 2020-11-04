let head = null;
let tail = null;

function addToHead(value) {
  if (head === null) {
    const newItem = {
      data: value,
      next: head,
    };

    head = newItem;
    tail = newItem;
    return;
  }

  const newHead = {
    data: value,
    next: head,
  };

  head = newHead;
}

function addToTail(value) {
  if (tail === null) {
    const newItem = {
      data: value,
      next: head,
    };

    head = newItem;
    tail = newItem;
    return;
  }

  const newTail = {
    data: value,
    next: null,
  };

  tail.next = newTail;
  tail = newTail;
}

const list = {
  data: 1,
  next: {
    // <- tail
    data: 2,
    next: null,
  },
};

const list1 = {
  data: 1,
  next: {
    data: 2,
    next: {
      // <- tail
      data: 3,
      next: null,
    },
  },
};

addToTail(1);
console.log("head -> ", head);
console.log("tail -> ", tail);

addToTail(2);
console.log("head -> ", head);
console.log("tail -> ", tail);

addToTail(3);
console.log("head -> ", head);
console.log("tail -> ", tail);

function stackPush(value) {
  addToTail(value);
}

function stackPop() {
  return tail;
}

function queuePush(value) {
  addToTail(value);
}

function queuePop() {
  const data = head.data;
  head = head.next;
  return data;
}
