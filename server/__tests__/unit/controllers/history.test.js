const History = require('../../../models/History')
const historyController = require('../../../controllers/history')

const mockSend = jest.fn()
const mockJson = jest.fn()
const mockEnd = jest.fn()

const mockStatus = jest.fn(() => ({ 
    send: mockSend, 
    json: mockJson, 
    end: mockEnd 
  }));

  const mockRes = { status: mockStatus };

