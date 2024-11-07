import { useState } from "react";
import congratulations from "../../public/congratulation.png";
import { Link } from "react-router-dom";

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    surname: "",
    firstName: "",
    lastName: "",
    gender: "",
    maritalStatus: "",
    email: "",
    phone: "",
    dob: "",

    city: "",
    bankName: "",
    accountNumber: "",
    employmentStatus: "",
    employmentIndustry: "",
    employerName: "",
    workPhone: "",
    loanAmount: "",
    loanDuration: "",
  });

  const handleInputChange = (e) => {
    const { id, name, value } = e.target;
    const field = id || name;
    setFormData({ ...formData, [field]: value });
  };

  const handleApplyClick = (e) => {
    e.preventDefault();
    const allFieldsFilled = Object.values(formData).every((field) => field);
    if (allFieldsFilled) {
      setSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const Interest = () => {
    (formData * 40) / 100;
  };

  return (
    <div className="relative container pb-10 h-fit w-screen ">
      <div className="form-container w-[100vw] lg:h-[60vh] h-[40vh] bg-cover bg-center  bg-black bg-blend-darken bg-opacity-50  relative">
        <h1 className="font-bold xl:text-6xl lg:text-[5rem] text-[2rem] text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full">
          Apply for a loan
        </h1>
      </div>

      <form
        className="2xl:w-full lg:w-full w-11/12 mx-auto pt-10 grid gap-6"
        onSubmit={handleApplyClick}
      >
        <section className="personal-info">
          <h1>PERSONAL INFORMATION</h1>

          <div className="grid lg:grid-cols-3 lg:gap-10 gap-5 py-2">
            <div className="field">
              <label htmlFor="surname">SURNAME</label>
              <input
                id="surname"
                className="input-box"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="field ">
              <label htmlFor="firstName">FIRST NAME</label>
              <input
                id="firstName"
                className="input-box"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="field">
              <label className="uppercase" htmlFor="lastName">
                Other Names
              </label>
              <input
                id="lastName"
                className="input-box"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="grid py-2">
            <label>GENDER</label>
            <div className="radio-group">
              <label className="radio">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleInputChange}
                  required
                />
                Male
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleInputChange}
                  required
                />
                Female
              </label>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 lg:gap-10 gap-5 py-2">
            <div className="field-2 ">
              <label htmlFor="maritalStatus">MARITAL STATUS</label>
              <select
                id="maritalStatus"
                className="dropdown"
                value={formData.maritalStatus}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled className="option">
                  Choose Option
                </option>
                <option value="single" className="option">
                  Single
                </option>
                <option value="married" className="option">
                  Married
                </option>
                <option value="divorced" className="option">
                  Divorced
                </option>
                <option value="separated" className="option">
                  Separated
                </option>
                <option value="widowed" className="option">
                  Widowed
                </option>
                <option value="cohabitating" className="option">
                  Co-Habitating
                </option>
              </select>
            </div>
            <div className="field">
              <label className="uppercase" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="input-box"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="phone">PHONE NUMBER</label>
              <input
                id="phone"
                type="tel"
                className="input-box"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 lg:gap-10 gap-5 py-2">
            <div className="field">
              <label htmlFor="dob">DATE OF BIRTH</label>
              <input
                id="dob"
                type="date"
                className="input-box"
                placeholder="Date Of Birth"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="field">
              <label className="uppercase" htmlFor="city">
                Town/City
              </label>
              <input
                id="city"
                className="input-box"
                placeholder="Town/City"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </section>

        <section className="bank-info">
          <h1>BANK INFORMATION</h1>

          <div className="grid lg:grid-cols-3 lg:gap-10 gap-5 py-2">
            <div className="field-2 ">
              <label className="uppercase" htmlFor="bankName">
                Bank Name
              </label>
              <select
                id="bankName"
                className="dropdown"
                value={formData.bankName}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled className="option">
                  Choose Option
                </option>
                <option value="first-bank" className="option">
                  First Bank
                </option>
                <option value="access-bank" className="option">
                  Access Bank
                </option>
                <option value="gt-bank" className="option">
                  GT Bank
                </option>
                <option value="zenith-bank" className="option">
                  Zenith Bank
                </option>
                <option value="uba" className="option">
                  United Bank Of Africa
                </option>
                <option value="opay" className="option">
                  Opay
                </option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="accountNumber">ACCOUNT NUMBER</label>
              <input
                id="accountNumber"
                className="input-box"
                placeholder="Account Number"
                value={formData.accountNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </section>

        <section className="work-info">
          <h1 className="uppercase">Work/Office Information</h1>

          <div className="grid lg:grid-cols-3 lg:gap-10 gap-5 py-2">
            <div className="field">
              <label className="uppercase" htmlFor="employmentStatus">
                Employment Status
              </label>
              <select
                id="employmentStatus"
                className="dropdown"
                value={formData.employmentStatus}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled className="option">
                  Choose Option
                </option>
                <option value="employed" className="option">
                  Employed
                </option>
                <option value="unemployed" className="option">
                  Unemployed
                </option>
                <option value="self-employed" className="option">
                  Self-Employed
                </option>
              </select>
            </div>
            <div className="field">
              <label className="uppercase" htmlFor="employmentIndustry">
                Employment Industry
              </label>
              <input
                id="employmentIndustry"
                className="input-box"
                placeholder="Employment Industry"
                value={formData.employmentIndustry}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="field">
              <label className="uppercase" htmlFor="employerName">
                Employer's Name
              </label>
              <input
                id="employerName"
                className="input-box"
                placeholder="Employer Name"
                value={formData.employerName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="field">
              <label className="uppercase" htmlFor="workPhone">
                Work Phone Number
              </label>
              <input
                id="workPhone"
                type="tel"
                className="input-box"
                placeholder="Work Phone Number"
                value={formData.workPhone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </section>

        <section className="loan-info">
          <h1 className="uppercase">Loan Details</h1>

          <div className="grid lg:grid-cols-3 lg:gap-10 gap-5 py-2">
            <div className="field">
              <label className="uppercase" htmlFor="loanAmount">
                Loan Amount
              </label>
              <input
                id="loanAmount"
                className="input-box"
                placeholder="Loan Amount"
                value={formData.loanAmount}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="field">
              <label className="uppercase" htmlFor="loanDuration">
                Loan Duration
              </label>
              <select
                id="loanDuration"
                className="dropdown"
                value={formData.loanDuration}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled className="option">
                  Choose Option
                </option>
                <option value="employed" className="option">
                  3 Months
                </option>
                <option value="unemployed" className="option">
                  6 Months
                </option>
                <option value="self-employed" className="option">
                  9 Months
                </option>
                <option value="self-employed" className="option">
                  12 Months
                </option>
              </select>
            </div>
          </div>
        </section>

        <button
          type="submit"
          className=" bg-[#2C1762] py-3 text-white mx-auto rounded-lg font-[600] lg:w-[30%] w-10/12 mt-5"
        >
          Submit
        </button>
      </form>

      {submitted && (
        <div className="absolute top-1/2 pt-10 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-screen bg-opacity-80 h-full backrop-blur">
          <div className="lg:mt-[73rem] mt-[125rem] lg:w-8/12  w-10/12 mx-auto grid gap-2 bg-[#FBFBFD] lg:p-20 p-8 rounded-3xl">
            <img
              src={congratulations}
              alt="congratulations"
              className="mx-auto"
            />
            <h1 className="grid gap-5 text-center font-[600] text-xl">
              <span>Congratulations {formData.firstName} 🎉</span>
              <span>
                {" "}
                Your Loan of &#8358;{formData.loanAmount} Has Been Approved!
              </span>
              <span>
                {" "}
                Your payback interest is &#8358;
                {(formData.loanAmount * 4) / 100}
              </span>
            </h1>

            <Link
              to="/"
              className=" bg-purple-800 text-white rounded-xl py-2 px-5 mx-auto mt-4"
            >
              <button>Back to home</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
