// ChatGPT:
// Let's consider a hypothetical example where a third-party library defines a service that expects certain methods to be implemented by its consumers. 
// This could be seen as a potential violation of ISP if a consumer is forced to implement methods that it does not need.
// Hypothetical third-party library service
// Service interface violating ISP

interface BadService {
  // Method that clients (services or other components) must implement, even if unnecessary
  onCustomEvent(): void;


  // "?" optional method
  // onCustomEvent?(): void;
  // This approach can be a way to mitigate ISP concerns if the method is genuinely optional and not required by all clients.
}

// Service implementing the BadService interface
@Injectable({
  providedIn: 'root',
})
export class BadServiceImpl1 implements BadService {
  // Implementation of onCustomEvent for Service 1
  onCustomEvent(): void {
    console.log('Service 1: Custom event handled');
  }
}

// Another service implementing the BadService interface
@Injectable({
  providedIn: 'root',
})
export class BadServiceImpl2 implements BadService {
  // Implementation of onCustomEvent for Service 2
  onCustomEvent(): void {
    console.log('Service 2: Custom event handled');
  }
}

// Yet another service implementing the BadService interface
@Injectable({
  providedIn: 'root',
})
export class BadServiceImpl3 implements BadService {
  // Implementation of onCustomEvent for Service 3
  onCustomEvent(): void {
    console.log('Service 3: Custom event handled');
  }
}

// Client service using the BadService
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(
    private readonly badService1: BadServiceImpl1,
    private readonly badService2: BadServiceImpl2,
    private readonly badService3: BadServiceImpl3
  ) { }

  // Client service uses methods from all three services, even if unnecessary
  performOperations(): void {
    this.badService1.onCustomEvent();
    this.badService2.onCustomEvent();
    this.badService3.onCustomEvent();
  }
}

// three services (BadServiceImpl1, BadServiceImpl2, and BadServiceImpl3) implement the common BadService interface, which includes a method onCustomEvent. 
// However, the ClientService uses methods from all three services, even if it might not need all of them.
