const History = require("../../../models/History")
const db = require("../../../db/connect")


xdescribe('History', () => {
    beforeEach(() => jest.clearAllMocks())
  
    afterAll(() => jest.resetAllMocks())
  
    describe ('getAll', () => {
      it('resolves with history facts on successful db query', async () => {
        // Arrange
        const mockHistoryFacts = [
          { id: 1, fact: 'fact1', fact_img: "img1" },
          { id: 2, fact: 'fact2', fact_img: "img2" },
          { id: 3, fact: 'fact3', fact_img: "img3" },
        ];
        jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: mockHistoryFacts });
  
        // Act
        const history = await History.getAll();
  
        // Assert
        expect(history).toHaveLength(3);
        expect(history[0]).toHaveProperty('id');
        expect(history[0].fact).toBe('fact1');
        expect(db.query).toHaveBeenCalledWith("SELECT * FROM history_item;");
      });
  
      it('should throw an Error when no facts are found', async () => {
        // Arrange
        jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: [] });
  
        // Act & Assert
        await expect(History.getAll()).rejects.toThrow('No history items available.');
      });
    })
  
    describe ('getOneByID', () => {
      it('resolves with one history fact on successful db query', async () => {
        // Arrange
        const testHistoryItem = { id: 1, fact: 'fact1', fact_img: "img1" };
        jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: [testHistoryItem] });
  
        // Act
        const result = await History.getOneById(1);
  
        // Assert
        expect(result).toBeInstanceOf(History);
        expect(result.fact).toBe('fact1');
        expect(result.id).toBe(1);
        expect(db.query).toHaveBeenCalledWith(
            "SELECT * FROM history_item WHERE id = $1;",
            [1]
          );    
      });
  
      it('should throw an Error when fact is not found', async () => {
        // Arrange
        jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: [] });
  
        // Act & Assert
        await expect(History.getOneById(999)).rejects.toThrow('Unable to locate history item.');
      });
    })
  
    describe('create', () => {
      it('resolves new history fact on successful creation', async () => {
        // Arrange
        const factData = { fact: 'fact1', fact_img: 'img1' };
        jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: [{ ...factData, id: 1 }] });
  
        // Act
        const result = await History.create(factData);
  
        // Assert
        expect(result).toBeInstanceOf(History);
        expect(result).toHaveProperty('id', 1);
        expect(result).toHaveProperty('fact', 'fact1');
        expect(result).toHaveProperty('fact_img', 'img1');
        expect(db.query).toHaveBeenCalledWith(
          "INSERT INTO history_item (fact, fact_img) VALUES ($1, $2) RETURNING *;",
      [factData.fact, factData.fact_img]
        );
      });
  
    })
  
    
    describe('update', () => {
      it('should return the updated fact on successful update', async () => {
        // Arrange
        const fact = new History({ id: 72, fact: 'fact72', fact_img: 'img72' });
        const updatedData = { fact: 'fact73', fact_img: 'img73' };
        const updatedFact = { id: 72, ...updatedData };
        jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: [updatedFact] });
  
        // Act
        const result = await fact.update(updatedData);
  
        // Assert
        expect(result).toBeInstanceOf(History);
        expect(result.id).toBe(72);
        expect(result.fact).toBe('fact73');
        expect(result.fact_img).toBe('img73');
        expect(db.query).toHaveBeenCalledWith(
          "UPDATE history_item SET fact = $1, fact_img = $2 WHERE id = $3 RETURNING *;",
      [updatedData.fact, updatedData.fact_img, fact.id]
        );
      });
  
    //   it('should throw an Error when fact or image is missing', async () => {
    //     // Arrange
    //     const history = new History({ id: 1, fact: 'fact1', fact_img: 'img1' });
    //     const incompleteData = { fact: 'fact2' };
  
    //     // Act & Assert
    //     await expect(history.update(incompleteData)).rejects.toThrow('Unable to update history item.');
    //   });
  
      it('should throw an Error on db query failure', async () => {
        // Arrange
        const history = new History({ id: 72, fact: 'fact3', fact_img: 'img3' });
        jest.spyOn(db, 'query').mockRejectedValue(new Error('Database error'));
  
        // Act & Assert
        await expect(history.update({ fact: 'fact4', fact_img: 'img4' })).rejects.toThrow('Database error');
      });
    })
  
    describe ('destroy', () => {
      it('should return the deleted fact on successful deletion', async () => {
        // Arrange
        const history = new History({ id: 1, fact: 'fact1', fact_img: 'img1' });
        jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: [{ id: 1, fact: 'fact1', fact_img: 'img1' }] });
  
        // Act
        const result = await history.destroy();
  
        // Assert
        expect(result).toBeInstanceOf(History);
        expect(result.id).toBe(1);
        expect(result.fact).toBe('fact1');
        expect(result.fact_img).toBe('img1');
        expect(db.query).toHaveBeenCalledWith("DELETE FROM history_item WHERE id = $1 RETURNING *;",
      [history.id]);
      });
  
      it('should throw an Error on db query failure', async () => {
        // Arrange
        const history = new History({ id: 1, fact: 'fact1', fact_img: 'img1' });
        jest.spyOn(db, 'query').mockRejectedValue(new Error('Database error'));
  
        // Act & Assert
        await expect(history.destroy()).rejects.toThrow('Database error');
      });
    })
  })