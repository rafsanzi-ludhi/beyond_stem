const userController = require('../../../controllers/user')
const User = require("../../../models/User")

const mockSend = jest.fn()
const mockJson = jest.fn()
const mockEnd = jest.fn()

const mockStatus = jest.fn(() => ({ 
    send: mockSend, 
    json: mockJson, 
    end: mockEnd 
  }));

const mockRes = { status: mockStatus };

describe('Login Controller',() => {
    beforeEach(() => jest.clearAllMocks())
    afterAll(() => jest.resetAllMocks())

    describe('Register',  () => {
        it('Should returnn 201 when successfull', async () =>{
            const testData = {username: 'user', password: 'pass'}
            let mockReq = {body: testData}
            jest.spyOn(User, 'create').mockResolvedValue(testData)

            await userController.register(mockReq, mockRes)

            expect(User.register).toHaveBeenCalledTimes(1);
            expect(mockStatus).toHaveBeenCalledWith(201);
        })
    
    })

})