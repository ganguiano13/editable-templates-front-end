import logo from '../assets/cirrusUtilities.png';
import IData from '../interfaces/IData';


export default function TestTemplate({firstName,
  lastName,
  streetAddress,
  city,
  state,
  postalCode,
  policyNumber,
  policyEffectiveDate,
  currentBalance,
  amountDue}: IData) {
   

  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 mt-5'>
        <div className='flex space-x-80'>
          <header className="">
            <img className='w-96 h-20' src={logo} alt="logo" />
          </header>
          <div className='font-bold'>
            <p>Date: 01/14/2025</p>
            <p>Payment Due Date:	04/06/2025</p>
            <p>Amount Due: ${amountDue}</p>
          </div>
          </div>
          <div className='flex-col'>
          <div className='grid grid-cols-5 gap-1'>
            <div className='flex-col mt-20'>
              <p className='font-bold'>Member:</p>
              <p>{firstName + " " + lastName}</p>
              <p>{streetAddress}</p>
              <p>{city + ", " + state + " " + postalCode}</p>
            </div> 
          </div>       
          <div className='grid grid-cols-5 gap-1 mt-16 '>
            <div className='flex-col'>
              <p className='font-bold'>Policy Number</p>
              <p>{policyNumber}</p>
            </div>
            <div className='flex-col'>
              <p className='font-bold'>Policy Effective Date</p>
              <p>{policyEffectiveDate}</p>
            </div>
            <div className='w-20'></div>
            <div className='flex-col'>
              <p className='font-bold'>Current Balance</p>
              <p>${currentBalance}</p>
            </div>
            <div className='flex-col'>
              <p className='font-bold'>Amount Due</p>
              <p>${amountDue}</p>
            </div>
          </div>
        </div>
    </div>
  )
}
