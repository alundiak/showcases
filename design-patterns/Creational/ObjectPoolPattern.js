// ChatGPT:
// The Object Pool Pattern involves creating and maintaining a pool of reusable objects to avoid the overhead of object creation and destruction. 

function ObjectPoolPattern() {
  class ObjectPool {
    constructor(objectFactory, maxSize) {
      this.objectFactory = objectFactory;
      this.maxSize = maxSize;
      this.pool = [];
    }

    acquire() {
      if (this.pool.length > 0) {
        console.log("Reusing existing object from pool");
        return this.pool.pop();
      } else {
        console.log("Creating new object");
        return this.objectFactory.create();
      }
    }

    release(obj) {
      if (this.pool.length < this.maxSize) {
        console.log("Releasing object to pool");
        this.pool.push(obj);
      } else {
        console.log("Pool is full. Discarding the object.");
      }
    }
  }

  class ObjectFactory {
    create() {
      return { /* Some object initialization logic */ };
    }
  }

  // Example usage
  const factory = new ObjectFactory();
  const pool = new ObjectPool(factory, 5);

  const obj1 = pool.acquire();
  const obj2 = pool.acquire();
  const obj3 = pool.acquire();

  // Release objects back to the pool
  pool.release(obj1);
  pool.release(obj2);

  // Acquire more objects
  const obj4 = pool.acquire();
  const obj5 = pool.acquire();

  // The pool is now full; acquiring more will create new objects
  const obj6 = pool.acquire();
  const obj7 = pool.acquire();

}

ObjectPoolPattern();

// ObjectPool manages a pool of objects using acquire to get an object from the pool and release to return an object to the pool.
// ObjectFactory is responsible for creating new objects when the pool is empty.
// The pool has a maximum size (maxSize), and if it reaches that limit, newly released objects are discarded.
