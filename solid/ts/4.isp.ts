// Note.
// In TypeScript there is reserved "interface Worker extends EventTarget, AbstractWorker"
//

// Without ISP
interface MyWorker {
  work(): void;
  eat(): void;
}

function testISP_1() {
  class LundiakWorker implements MyWorker {
    //
    // If eat() or work() is NOT NEEDED, NOT USED and then implementation SKIPPED, then TypeScript BUILD WILL FAIL !!!
    // error TS2339: Property 'eat' does not exist on type 'LundiakWorker'.
    // error TS2339: Property 'work' does not exist on type 'LundiakWorker'.
    // Meaning, it's violates ISP rule - because in theory there can be worker who doesn't need to work or can't eat and we must be able to implement it.
    // 

    work() {
      console.log('LundiakWorker: work()');
    }

    eat() {
      console.log('LundiakWorker: eat()');
    }
  }

  const w = new LundiakWorker();
  console.log(w);
  w.work();
  w.eat();
}
testISP_1();

// With ISP
interface WorkableISP {
  work(): void;
}

interface EatableISP {
  eat(): void;
}

interface CodableISP {
  code(): void;
}

interface ManageableISP {
  manage(): void;
}

class CoderISP implements WorkableISP, EatableISP, CodableISP {
  work() {
    console.log('CoderISP: work() implementation');
  }

  eat() {
    console.log('CoderISP: eat() implementation');
  }

  code() {
    console.log('CoderISP: code() implementation');
  }

  // TypeScript doesn't throw error here, because we don't implement interface ManageableISP method manage()
}

class TeamLeadISP implements WorkableISP, EatableISP, ManageableISP {
  work() {
    console.log('TeamLeadISP: work() implementation');
  }

  eat() {
    console.log('TeamLeadISP: eat() implementation');
  }

  manage() {
    console.log('TeamLeadISP: manage() implementation');
  }
  // TypeScript doesn't throw error here, because we don't implement interface CoderISP method code()
}

function testISP_2() {
  const teamLeadWorkerISP = new TeamLeadISP();
  console.log(teamLeadWorkerISP);

  teamLeadWorkerISP.work();
  teamLeadWorkerISP.eat();
  teamLeadWorkerISP.manage();
}
testISP_2();

// So if Worker interface gives us basic contract for employee to work() and eat() 
// then Coder interface provides MINIMAL extension of potential feature of Worker - code()
// and Manager interface also gives additional feature of employee to mange()
// which in result gives us ability to code instances of Coder class and instance of teamLEad class 
// with no need to implement methods from interfaces which are NOT relevant for Coder and TeamLead

// function testAndrii() {

// }
