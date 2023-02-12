 class Person {
    constructor(name) {
      this.name = name;
      this.spent = 0;
      this.owed = 0;
    }
  
    addExpense(amount, people) {
      if (amount <= 0 || people.length === 0) {
        throw new Error("Invalid input: amount must be positive and people array must not be empty.");
      }
      const share = amount / people.length;
      this.spent += amount;
      people.forEach(person => {
        person.owed += share;
      });
    }
  }
  
  const A = new Person('A');
  const B = new Person('B');
  const C = new Person('C');
  const D = new Person('D');
  
  const people = [A, B, C, D];
  
  A.addExpense(100, [A, B, C, D]);
  B.addExpense(500, [C, D]);
  D.addExpense(300, [A, B]);
  
  people.forEach(person => {
    console.log(`${person.name} ${person.owed - person.spent <= 0 ? 'gets' : 'has to give'} ${Math.abs(person.owed - person.spent).toFixed(2)}`);
  });
