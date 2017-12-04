'use strict';

class LinkedList{
  constructor(value){
    this.value = value;
    this.next = null;
  }

  append(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');

    if(!this.next)
      this.next = node;
    else
      this.next.append(node);

    return this;
  }

  find(value){
    if (typeof value !== 'number'){
      throw new TypeError('<value> must be a number');
    }
    if (this.value !== value && this.next === null){
      console.log(`${value} is not present in this LinkedList`);
      return;
    }
    if (this.value !== value){
      return this.next.find(value);
    }
    return this;
  }

  remove(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');

    if(node.value === this.value){
      this.value = this.next.value;
      this.next = this.next.next;
      return this;
    }

    if(!this.next)
      return this;
    if(this.next === node){
      this.next = this.next.next;
    } else {
      this.next.remove(node);
    }
    return this;
  }
}

module.exports = LinkedList;
