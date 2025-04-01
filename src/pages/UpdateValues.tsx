
import IData from '../interfaces/IData'
import axios from 'axios';
import IUpdateValuesProps from '../interfaces/IUpdateValuesProps';

export default function UpdateValues({data}: IUpdateValuesProps) {
    const jsonData: IData = data as IData;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const updatedData: IData = { ...jsonData };
        formData.forEach((value, key) => {
            (updatedData as any)[key] = value;
        });

        const res = await axios.post('http://localhost:3000/modify-json', updatedData)
        if (res.status === 200) {
            console.log('File updated successfully');
        } else {
            console.error('Error updating file');
        }
        //UpdateFile(updatedData);
        console.log(updatedData);
    };

  return (
    <div>
        <div className='flex flex-col items-center justify-center mt-5'>
            <h1 className='text-3xl font-bold'>Update Values</h1>
            <p className='text-lg'>This page is for updating the values in the JSON file.</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <form onSubmit={e => handleSubmit(e)} className='flex flex-col space-y-4 mt-5'>
            {Object.keys(jsonData).map((key) => (
                <label key={key} className='flex flex-col'>
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                    <input
                        type="text"
                        name={key}
                        defaultValue={jsonData[key as keyof IData]}
                        className='border border-gray-300 rounded p-2'
                    />
                </label>
            ))}
            <button type="submit" className='bg-blue-500 text-white rounded p-2'>Update</button>
            </form>
        </div>
    </div>
  )
}
