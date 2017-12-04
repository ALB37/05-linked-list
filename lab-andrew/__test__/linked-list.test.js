'use strict';

const LinkedList = require('../model/linked-list');

describe('linked-list.js',() => {
  test('A list with a single element, should have a value and no next', () => {
    let result = new LinkedList(5);
    expect(result.value).toEqual(5);
    expect(result.next).toEqual(null);
  });

  test('improper append should throw error', done => {
    let result = new LinkedList(5);
    expect(() => result.append(4)).toThrow();
    done();
  });

  test('insertion should properly modify the next property', () => {
    let result = new LinkedList(5);
    result.append(new LinkedList(4));
    result.append(new LinkedList(10));

    expect(result.value).toEqual(5);
    expect(result.next.value).toEqual(4);
    expect(result.next.next.value).toEqual(10);
    expect(result.next.next.next).toEqual(null);
  });

  test('remove should update the next property and erase an element', () => {
    let first = new LinkedList(10);
    let second = new LinkedList(20);
    let third = new LinkedList(30);

    first.append(second);
    first.append(third);

    expect(first.value).toEqual(10);
    expect(first.next.value).toEqual(20);
    expect(first.next.next.value).toEqual(30);
    expect(first.next.next.next).toEqual(null);

    first.remove(second);

    expect(first.value).toEqual(10);
    expect(first.next.value).toEqual(30);
    expect(first.next.next).toEqual(null);

  });

  test('remove should be able to erase the first element of a LinkedList', () => {
    let first = new LinkedList(10);
    let second = new LinkedList(20);
    let third = new LinkedList(30);

    first.append(second);
    first.append(third);

    expect(first.value).toEqual(10);
    expect(first.next.value).toEqual(20);
    expect(first.next.next.value).toEqual(30);
    expect(first.next.next.next).toEqual(null);

    first.remove(first);

    expect(first.value).toEqual(20);
    expect(first.next.value).toEqual(30);
    expect(first.next.next).toEqual(null);
  });

  test('remove should remove nothing if the node isn\'t present in LinkedList', () =>{
    let first = new LinkedList(10);
    let second = new LinkedList(20);
    let third = new LinkedList(30);

    first.append(second);

    expect(first.value).toEqual(10);
    expect(first.next.value).toEqual(20);
    expect(first.next.next).toEqual(null);

    first.remove(third);

    expect(first.value).toEqual(10);
    expect(first.next.value).toEqual(20);
    expect(first.next.next).toEqual(null);
  });

  test('remove should throw if node is not a LinkedList', () => {
    let first = new LinkedList(10);
    expect(() => first.remove(10)).toThrow();
  });

  test('find should return node with correct value', () => {
    let first = new LinkedList(10);
    let second = new LinkedList(20);
    let third = new LinkedList(30);

    first.append(second);
    first.append(third);

    let result = first.find(20);

    expect(result).toEqual(second);
  });

  test('find should return undefined if value is not present', () => {
    let first = new LinkedList(10);
    let second = new LinkedList(20);
    let third = new LinkedList(30);

    first.append(second);
    first.append(third);

    let result = first.find(40);

    expect(result).toBe(undefined);
  });

  test('find should throw if value is not a number', () => {
    let first = new LinkedList(10);
    expect(() => first.find('apples')).toThrow();
  });

});
