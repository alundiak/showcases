// ChatGPT:
// a hypothetical scenario to illustrate a situation that might be considered a violation of ISP:

// Interface defining user-related operations
interface UserService {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  create(user: CreateUserDto): Promise<User>;
  update(id: string, user: UpdateUserDto): Promise<User | null>;
  delete(id: string): Promise<void>;
}

// Implementation of UserService
class UserServiceImpl implements UserService {
  // ... implementation of all methods
}

// Controller using UserService
@Controller('users')
class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // ... other CRUD operations
}

//
//
//

// Controller using a subset of UserService methods
@Controller('limited-users')
class LimitedUserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // LimitedUserController only needs the findAll method,
  // but it's forced to implement the entire UserService interface.
  // This can be considered a violation of ISP for this specific use case.
}
