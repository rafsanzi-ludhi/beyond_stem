const User = require("../../../models/User")
const db = require("../../../db/connect")

xdescribe('User', () => {
    beforeEach(() => jest.clearAllMocks())
    afterAll(() => jest.resetAllMocks())

    describe ('getOneByID', () => {
        it('resolves with userID on successful db query', async () => {
          // Arrange
          const testUser = { user_id: 1, username: 'testUser', password: "testPassword" };
          jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: [testUser] });
    
          // Act
          const result = await User.getOneById(1);
    
          // Assert
          expect(result).toBeInstanceOf(User);
          expect(result.username).toBe('testUser');
          expect(result.id).toBe(1);
          expect(db.query).toHaveBeenCalledWith(
              "SELECT * FROM user_account WHERE user_id = $1",
      [testUser.user_id]
            );    
        });
    
        it('should throw an Error when user is not found', async () => {
          // Arrange
          jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: [] });
    
          // Act & Assert
          await expect(User.getOneById(999)).rejects.toThrow('Unable to locate user.');
        });
      })


    describe ('getOneByUsername', () => {
        it('resolves with user username on successful db query', async () => {
            // Arrange
            const testUser = { user_id: 1, username: 'testUser', password: "testPassword" };
            jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: [testUser] });
      
            // Act
            const result = await User.getOneByUsername(testUser.username);
      
            // Assert
            expect(result).toBeInstanceOf(User);
            expect(result.username).toBe('testUser');
            expect(result.id).toBe(1);
            expect(db.query).toHaveBeenCalledWith(
                "SELECT * FROM user_account WHERE username = $1",
      [testUser.username]
              );    
          });
      
          it('should throw an Error when user is not found', async () => {
            // Arrange
            jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: [] });
      
            // Act & Assert
            await expect(User.getOneById(999)).rejects.toThrow('Unable to locate user.');
          });
    })

    // describe('create', () => {
    //     it('resolves new user on successful creation', async () => {
    //       // Arrange
    //       const userData = { username: 'testUser', password: 'testPass' };
    //       jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: [{ ...userData, user_id: 1 }] });
    
    //       // Act
    //       const result = await User.create(userData);
    
    //       // Assert
    //       expect(result).toBeInstanceOf(User);
    //       expect(result).toHaveProperty('user_id', 1);
    //       expect(result).toHaveProperty('username', 'testUser');
    //       expect(result).toHaveProperty('password', 'testPass');
    //       expect(db.query).toHaveBeenCalledWith(
    //         "INSERT INTO user_account (username, password) VALUES ($1, $2) RETURNING user_id;",
    //   [userData.username, userData.password]
    //       );
    //     });
    
    //   })
})