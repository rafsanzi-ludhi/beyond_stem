const historyController = require('../../../controllers/history')
const History = require('../../../models/History')


const mockSend = jest.fn()
const mockJson = jest.fn()
const mockEnd = jest.fn()

const mockStatus = jest.fn(() => ({ 
    send: mockSend, 
    json: mockJson, 
    end: mockEnd 
  }));

  const mockRes = { status: mockStatus };

  describe('History controller', () => {
    beforeEach(() => jest.clearAllMocks())
  
    afterAll(() => jest.resetAllMocks())
  
    describe('index', () => {
      it('should return fact with a status code 200', async () => {
        const testFacts = ['fact1', 'fact2']
        jest.spyOn(History, 'getAll').mockResolvedValue(testFacts)
  
        await historyController.index(null, mockRes)
        
        expect(History.getAll).toHaveBeenCalledTimes(1)
        expect(mockStatus).toHaveBeenCalledWith(200)
      })
  
      it('should return an error upon failure', async () => {
        jest.spyOn(History, 'getAll').mockRejectedValue(new Error('database error'))
  
        await historyController.index(null, mockRes)
        
        expect(History.getAll).toHaveBeenCalledTimes(1)
        expect(mockStatus).toHaveBeenCalledWith(500)
      })
    })
  
    describe ('show', () => {
      let testFact, mockReq;
  
      beforeEach(() => {
        testFact = { id: 1, fact: 'fact1', fact_img: 'img1' }
        mockReq = { params: { id: 1 } }
      });
  
      it('should return the fact with a 200 status code', async () => {
        jest.spyOn(History, 'getOneById').mockResolvedValue(new History(testFact))
  
        await historyController.show(mockReq, mockRes);
        
        expect(History.getOneById).toHaveBeenCalledTimes(1);
        expect(mockStatus).toHaveBeenCalledWith(200);
       
      })
  
      it('should return an error if the fact is not found', async () => {
        jest.spyOn(History, 'getOneById').mockRejectedValue(new Error('error'))
  
        await historyController.show(mockReq, mockRes)
        
        expect(History.getOneById).toHaveBeenCalledTimes(1)
        expect(mockStatus).toHaveBeenCalledWith(404)
       
      })
    })
  
    describe ('create', () => {
      it('should return a new history item with a 201 status code', async () => {
        let testFact = { fact: 'fact1', fact_img: 'img1' }
        const mockReq = { body: testFact }
  
        jest.spyOn(History, 'create').mockResolvedValue(new History(testFact))
  
        await historyController.create(mockReq, mockRes)
        
        expect(History.create).toHaveBeenCalledTimes(1)
        expect(mockStatus).toHaveBeenCalledWith(201)
      
      })
  
  
      it('should return an error if creation fails', async () => {
        let testFact = { fact: 'fact1' }
        const mockReq = { body: testFact }
  
        jest.spyOn(History, 'create').mockRejectedValue(new Error('oh no'))
  
        await historyController.create(mockReq, mockRes)
        
        expect(History.create).toHaveBeenCalledTimes(1)
        expect(mockStatus).toHaveBeenCalledWith(400)
      
      })
    })
  
    describe ('update', () => {
      it('should update a fact and return it with a 200 status code', async () => {
        const existingFact = { id: 1, fact: 'fact1', fact_img: 'img1' }
        const updatedFact = { ...existingFact, fact: 'updatedFact', fact_img: 'updatedImg' };
        const mockReq = { params: { id: 1 }, body: { fact: 'updatedFact', fact_img: 'updatedImg' } }
  
        jest.spyOn(History, 'getOneById').mockResolvedValue(new History(existingFact))
        jest.spyOn(History.prototype, 'update').mockResolvedValue(updatedFact)
  
        await historyController.update(mockReq, mockRes)
  
        expect(History.getOneById).toHaveBeenCalledWith(1);
        expect(History.prototype.update).toHaveBeenCalledWith({ fact: 'updatedFact', fact_img: 'updatedImg' });
        expect(mockStatus).toHaveBeenCalledWith(200);
        
      })
  
      it('should return an error if the goat is not found', async () => {
        const mockReq = { params: { id: 49 }, body: {} };
  
        jest.spyOn(History, 'getOneById').mockRejectedValue(new Error('Fact not found'));
  
        await historyController.update(mockReq, mockRes);
  
        expect(History.getOneById).toHaveBeenCalledWith(49);
        expect(mockStatus).toHaveBeenCalledWith(404);
       
      })
    })
  
    describe ('destroy', () => {
      it('should return a 204 status code on successful deletion', async () => {
        const testFact = { id: 1, fact: 'fact1', fact_img: 'img1' };
        const mockReq = { params: { id: 1 } };
  
        jest.spyOn(History, 'getOneById').mockResolvedValue(new History(testFact));
        jest.spyOn(History.prototype, 'destroy').mockResolvedValue();
  
        await historyController.destroy(mockReq, mockRes);
  
        expect(History.getOneById).toHaveBeenCalledWith(1);
        expect(History.prototype.destroy).toHaveBeenCalledTimes(1);
        expect(mockStatus).toHaveBeenCalledWith(204);
        expect(mockEnd).toHaveBeenCalled();
      });
  
      it('should return an error if the fact is not found', async () => {
        const mockReq = { params: { id: 49 } };
  
        jest.spyOn(History, 'getOneById').mockRejectedValue(new Error('Fact not found'));
  
        await historyController.destroy(mockReq, mockRes);
  
        expect(History.getOneById).toHaveBeenCalledWith(49);
        expect(mockStatus).toHaveBeenCalledWith(404);
        
      });
    })
 })

