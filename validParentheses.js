const isValid = function(s) {
    const stack = new Stack();
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else if (!stack.isEmpty() && s[i] === ")" && stack.peek() === "(") {
            stack.pop()
        } else if (!stack.isEmpty() && s[i] === "]" && stack.peek() === "[") {
            stack.pop()
        } else if (!stack.isEmpty() && s[i] === "}" && stack.peek() === "{") {
            stack.pop()
        } else {
            return false;
        }
    }
    return stack.isEmpty();
};

class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }
    
    push(val) {
      this.storage[this.size] = val;  
      this.size++;  
    }
    
    pop() {
      let top = this.storage[this.size -1];
      delete this.storage[this.size];
      this.size--;
      return top;
    }
    
    peek() {
        return this.storage[this.size -1];
    }
    
    isEmpty() {
       return this.getSize() === 0; 
    }
    
    getSize() {
       return this.size; 
    }
}


// Stack: Last In First Out (LIFO): The last object into a stack is the first object to leave the stack, used by a stack
