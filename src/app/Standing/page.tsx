import React from 'react';
import { teams } from '../Team/data'; // Ensure the path is correct
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Standing() {
  return (
    <main>
      <Navbar />
      <div className='w-full p-4'>
        <div className='overflow-x-auto'>
          <table className='min-w-full text-left mt-4'>
            <thead>
              <tr className='text-[px]'>
                <th>#</th>
                <th className='min-w-[150px]'>Team</th>
                <th className='min-w-[100px] text-center'>R1</th>
                <th className='min-w-[100px] text-center'>R2</th>
                <th className='min-w-[100px] text-center'>R3</th>
                <th className='min-w-[100px] text-center'>R4</th>
                <th className='min-w-[100px] text-center'>R5</th>
                <th className='min-w-[100px] text-center'>R6</th>
                <th className='min-w-[100px] text-center'>R7</th>
                <th className='min-w-[100px] text-center'>Points</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr key={index} className='border-b my-4 text-[#101828] text-[13px]'>
                  <td>{index + 1}</td>
                  <td className='min-w-[150px] '>{team.name}</td>
                  <td className='text-center min-w-[100px]'>{team.R1 || 'DNF'}</td>
                  <td className='text-center min-w-[100px]'>{team.R2 || 'DNF'}</td>
                  <td className='text-center min-w-[100px]'>{team.R3 || 'DNF'}</td>
                  <td className='text-center min-w-[100px]'>{team.R4 || 'DNF'}</td>
                  <td className='text-center min-w-[100px]'>{team.R5 || 'DNF'}</td>
                  <td className='text-center min-w-[100px]'>{team.R6 || 'DNF'}</td>
                  <td className='text-center min-w-[100px]'>{team.R7 || 'DNF'}</td>
                  <td className='text-center min-w-[100px]'>{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1 className='my-4'>DNF: Did Not Finish</h1>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Standing;
