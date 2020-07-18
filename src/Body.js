import React, { useState, useEffect } from "react";

const Body = () => {
  const [income, setIncome] = useState(0);
  const [saving, setSaving] = useState(0);
  const [moneyLeft, setMoneyLeft] = useState(0);
  const [spending, setSpending] = useState({
    pension: 0,
    house: 0,
    utility: 0,
    food: 0,
    transportation: 0,
    clothing: 0,
    medical: 0,
    recreation: 0,
    debts: 0,
    miscellaneous: 0,
  });
  const [data, setData] = useState({
    status: true,
    total: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setMoneyLeft(income - saving);
  }, [saving]);

  const handleSpendingChange = (e, tag) => {
    setSpending({
      ...spending,
      [tag]: e.target.value,
    });
  };

  const calculateMoneyAllocated = (per) => {
    return moneyLeft - moneyLeft * ((100 - per) / 100);
  };

  const form = () => (
    <form>
      <div className="form-group">
        <label>Monthly Income:</label>
        <input
          className="ml-3 mr-3 form-control"
          required
          type="number"
          placeholder="Enter your monthly Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Monthly Saving:</label>
        <input
          className="ml-3 mr-3 form-control"
          required
          type="number"
          placeholder="Enter how much you want to save monthly"
          value={saving}
          onChange={(e) => setSaving(e.target.value)}
        />
      </div>
      <h4 className="mt-5 ">Spending : </h4>
      <h6 className="mb-5 text-info">
        Enter the percentage you want to give to each category
      </h6>
      <div className="form-group">
        <label>Pension and Insurance %:</label>
        <input
          className="ml-3 mr-3 form-control"
          required
          type="number"
          placeholder="Enter the percentage of income you want to allocate "
          value={spending.pension}
          onChange={(e) => handleSpendingChange(e, "pension")}
        />
        <p className="lead">
          Alloted Money :{" "}
          <span className="text-info">
            Rs.{calculateMoneyAllocated(spending.pension)}
          </span>
        </p>
      </div>
      <div className="form-group">
        <label>Housing %:</label>
        <input
          className="ml-3 mr-3 form-control"
          required
          type="number"
          placeholder="Enter the percentage of income you want to allocate"
          value={spending.house}
          onChange={(e) => handleSpendingChange(e, "house")}
        />
        <p className="lead">
          Alloted Money :{" "}
          <span className="text-info">
            Rs.{calculateMoneyAllocated(spending.house)}
          </span>
        </p>
      </div>
      <div className="form-group">
        <label>Utility %:</label>
        <input
          className="ml-3 mr-3 form-control"
          required
          type="number"
          placeholder="Enter the percentage of income you want to allocate"
          value={spending.utility}
          onChange={(e) => handleSpendingChange(e, "utility")}
        />
        <p className="lead">
          Alloted Money :{" "}
          <span className="text-info">
            Rs.{calculateMoneyAllocated(spending.utility)}
          </span>
        </p>
      </div>
      <div className="form-group">
        <label>Food % :</label>
        <input
          className="ml-3 mr-3 form-control"
          required
          type="number"
          placeholder="Enter the percentage of income you want to allocate"
          value={spending.food}
          onChange={(e) => handleSpendingChange(e, "food")}
        />
        <p className="lead">
          Alloted Money :{" "}
          <span className="text-info">
            Rs.{calculateMoneyAllocated(spending.food)}
          </span>
        </p>
      </div>
      <div className="form-group">
        <label>Transportation % :</label>
        <input
          className="ml-3 mr-3 form-control"
          required
          type="number"
          placeholder="Enter the percentage of income you want to allocate"
          value={spending.transportation}
          onChange={(e) => handleSpendingChange(e, "transportation")}
        />
        <p className="lead">
          Alloted Money :{" "}
          <span className="text-info">
            Rs.{calculateMoneyAllocated(spending.transportation)}
          </span>
        </p>
      </div>
      <div className="form-group">
        <label>Clothing % :</label>
        <input
          className="ml-3 mr-3 form-control"
          required
          type="number"
          placeholder="Enter the percentage of income you want to allocate"
          value={spending.clothing}
          onChange={(e) => handleSpendingChange(e, "clothing")}
        />
        <p className="lead">
          Alloted Money :{" "}
          <span className="text-info">
            Rs.{calculateMoneyAllocated(spending.clothing)}
          </span>
        </p>
      </div>
      <div className="form-group">
        <label>Medical/Health % :</label>
        <input
          className="ml-3 mr-3 form-control"
          required
          type="number"
          placeholder="Enter the percentage of income you want to allocate"
          value={spending.medical}
          onChange={(e) => handleSpendingChange(e, "medical")}
        />
        <p className="lead">
          Alloted Money :{" "}
          <span className="text-info">
            Rs.{calculateMoneyAllocated(spending.medical)}
          </span>
        </p>
      </div>
      <div className="form-group">
        <label>Recreation % :</label>
        <input
          className="ml-3 mr-3 form-control"
          required
          type="number"
          placeholder="Enter the percentage of income you want to allocate"
          value={spending.recreation}
          onChange={(e) => handleSpendingChange(e, "recreation")}
        />
        <p className="lead">
          Alloted Money :{" "}
          <span className="text-info">
            Rs.{calculateMoneyAllocated(spending.recreation)}
          </span>
        </p>
      </div>
      <div className="form-group">
        <label>Debts % :</label>
        <input
          className="ml-3 mr-3 form-control"
          required
          type="number"
          placeholder="Enter the percentage of income you want to allocate"
          value={spending.debts}
          onChange={(e) => handleSpendingChange(e, "debts")}
        />
        <p className="lead">
          Alloted Money :{" "}
          <span className="text-info">
            Rs.{calculateMoneyAllocated(spending.debts)}
          </span>
        </p>
      </div>
      <div className="form-group">
        <label>Miscellaneous % :</label>
        <input
          className="ml-3 mr-3 form-control"
          required
          type="number"
          placeholder="Enter the percentage of income you want to allocate"
          value={spending.miscellaneous}
          onChange={(e) => handleSpendingChange(e, "miscellaneous")}
        />
        <p className="lead">
          Alloted Money :{" "}
          <span className="text-info">
            Rs.{calculateMoneyAllocated(spending.miscellaneous)}
          </span>
        </p>
      </div>
    </form>
  );

  return (
    <div className="container jumbotron bg-dark">
      <div className="row">
        <div className="col-md-8 offset-md-2 ">{form()}</div>
      </div>
    </div>
  );
};

export default Body;
