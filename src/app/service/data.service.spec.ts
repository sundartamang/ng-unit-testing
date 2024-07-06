import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController }
  from '@angular/common/http/testing';
import { DataService } from './data.service';
import { USERS } from '../mock-data/users';

describe('DataService', () => {
  let service: DataService;
  // to populate test data
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should get all users', () => {
    service.getAllUsers().subscribe((users: any) => {
      // make sure data is coming
      expect(users).toBeTruthy();
      expect(users.length).toBe(3);
      // find one particular user
      const secondUser = users.find((user) => user.id === 2);
      expect(secondUser.name).toBe('bb');
    });
    // invoke mock request
    const mockRequest = testingController.expectOne('api/users');
    // check if method is get or not
    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush(Object.values(USERS));
  });

  it('should get user by id', () => {
    service.getUserById(3).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.name).toBe('cc');
    });
    const mockRequest = testingController.expectOne('api/user/3');
    expect(mockRequest.request.method).toEqual('GET');
    mockRequest.flush(USERS[3]);
  });

  it('should update the user', () => {
    let changes = { age: 30 };
    service.updateUser(2, changes).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.id).toBe(2);
    });
    const mockRequest = testingController.expectOne('api/user/2');
    expect(mockRequest.request.method).toEqual('PUT');
    // pass modified user to the flush now
    let updateUser = USERS[2];
    updateUser.age = 30;
    expect(mockRequest.request.body.age).toEqual(changes.age);
    mockRequest.flush(updateUser);
  });

  it('should delete the user', () => {
    service.deleteUser(2).subscribe((response: any) => {
      expect(response).toBeTruthy();
      expect(response.id).toBe(2);
    });
    const mockRequest = testingController.expectOne('api/user/2');
    expect(mockRequest.request.method).toBe('DELETE');
    mockRequest.flush({ id: 2 });
  });

  afterEach(() => {
    testingController.verify();
  });
});



