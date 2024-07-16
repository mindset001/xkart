'use client'
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Standing() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('https://xrace.onrender.com/teams/standing', {
          headers: {
            'X-Api-Key': 'ZPuKoTX2CohoPNC8noaiefai4lhLTi5bG1mpLbWZqVjuNx6gREUA-f4'
          }
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log(data.data, 'confirmed data'); // Log the fetched data
  
        // Update teams state
        setTeams(data.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };
  
    fetchTeams();
  }, []);

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
                {Array.from({ length: 7 }).map((_, index) => (
                  <th key={index} className='min-w-[100px] text-center'>R{index + 1}</th>
                ))}
                <th className='min-w-[100px] text-center'>Points</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr key={team.name} className='border-b my-4 text-[#101828] text-[13px]'>
                  <td>{index + 1}</td>
                  <td className='min-w-[150px]'>{team.name}</td>
                  {Array.from({ length: 7 }).map((_, i) => (
                    <td key={i} className='text-center min-w-[100px]'>
                      {team.points[i] ? team.points[i].point : 'DNF'}
                    </td>
                  ))}
                  <td className='text-center min-w-[100px]'>{team.total_point}</td>
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
