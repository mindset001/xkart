'use client'
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Standing from './standing'
import Men from '../../../public/assets/meen.png'
import Lak from '../../../public/assets/Lak.png'
import { Modal } from 'antd';
import Link from 'next/link';

const TeamPage = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [open, setOpen] = useState(false);
  const [teams, setTeams] = useState([]);
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    const fetchStandings = async () => {
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
  
        setStandings(data.data || []);
      } catch (error) {
        console.error('Error fetching standings:', error);
      }
    };
  
    fetchStandings();
  }, []);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('https://xrace.onrender.com/teams/teams', {
          headers: {
            'X-Api-Key': 'ZPuKoTX2CohoPNC8noaiefai4lhLTi5bG1mpLbWZqVjuNx6gREUA-f4'
          }
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log(data.data, 'confirmed team data'); // Log the fetched data
  
        setTeams(data.data || []);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };
  
    fetchTeams();
  }, []);

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
  };

  const handleTeamChange = (event) => {
    const selectedTeamId = parseInt(event.target.value, 10);
    const team = teams.find(team => team.id === selectedTeamId) || null;
    setSelectedTeam(team);
  };

  return (
    <main className='w-full flex flex-col justify-center'>
      <Navbar />
     
     <div className='hidden lg:block'>
     <div className=' w-full flex flex-col justify-center items-center'>
      <div className='w-[90%]'>
        <h1 className='my-6 uppercase text-[#101828] text-[28px] font-[600] text-left'>Teams information</h1>
        </div>
        <div className='w-[90%] flex justify-between gap-6'>
          {/* Teams */}
          <div className='w-1/6'>
            {teams.map((team, index) => (
              <div
                key={index}
                onClick={() => handleTeamClick(team)}
                className={`cursor-pointer p-2 ${selectedTeam?.id === team.id ? 'bg-[#EF3133] text-white uppercase' : 'bg-white text-black uppercase'}`}
              >
                <p>{team.name}</p>
              </div>
            ))}
          </div>

          {/* Team Information */}
          <div className='w-1/2'>
            {selectedTeam ? (
              <div>
                <div className='w-full'>
                <Image src={selectedTeam.image || Lak} alt={selectedTeam.name} width={300} height={300} className='w-full'/>
                </div>
                <h2 className='text-[32px] text-[#344054] font-[600] text-center mt-2 uppercase'>{selectedTeam.name}</h2>
                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Team Members Information</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.information}</p>
                <div className='flex justify-between my-2'>
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={200} /> 
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} />
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} />
                </div>
                </div>
                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Team Principal</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.information}</p>
                <div className='flex justify-between my-2'>
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={200} /> 
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} />
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} />
                </div>
                </div>

                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Drivers</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.information}</p>
                <div className='flex justify-between my-2'>
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={200} /> 
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} />
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} />
                </div>
                </div>

                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Team Performance</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.information}</p>
                <div className='flex justify-between my-2 gap-4'>
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={200} /> 
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} />
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} />
                </div>
                </div>
              </div>
            ) : (
              <p>Select a team to view their information.</p>
            )}
          </div>

          {/* Standings */}
          <div className='w-1/5 border px-2 text-left h-[500px]'>
            <h3 className='uppercase text-center text-[#000000] font-[600] text-[16px] px-2'>Standings</h3>
            <div className='w-full uppercase flex justify-between my-2 text-[#667085] text-[14px] font-[600]'>
                <div  className='flex gap-6'>
                <p>#</p>
                <p>Team</p>
                </div>
                <p>points</p>
            </div>
            <div className=''>
              <div className='' >
                {standings.map((team, index) => (
                  <div key={index} className='text-[14px] font-[400] text-[#101828] py-1 border-b  flex justify-between w-full text-left'>
                    <div className='flex gap-6'>
                    <div>{index + 1}</div>
                    <div>{team.name}</div>
                    </div>
                    <div>{team.total_point}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className='w-full flex mt-6 justify-center '>
            <button 
            onClick={()=> setOpen(true)}
            className='bg-[#fff] border-2 text-[#EF3133] border-[#EF3133] rounded-tl-[16px] rounded-br-[16px] flex w-[191px] h-[48px] items-center justify-center gap-2'>
             
             <p className='uppercase'>full standing</p>
           </button>
            </div>
            </div>
        </div>
      </div>
      <Modal
      // title="Basic Modal"
      centered
      open={open}
      onCancel={() => setOpen(false)}
      width={1200}
      >
       <Standing/>
    </Modal>
     </div>

      {/* Mobile View */}
      <div className='w-full flex flex-col justify-center items-center my-6 lg:hidden'>
      <div className='w-[90%] flex flex-col justify-between'>
          <h1 className='my-6 uppercase text-[#101828] text-[18px] font-[600] text-left'>Teams information</h1>
          
          <div className='w-full flex mb-4'>
            <button 
            className='bg-[#fff] border-2 text-[#EF3133] border-[#EF3133] rounded-tl-[16px] rounded-br-[16px] flex w-[191px] h-[48px] items-center justify-center gap-2'>
             
             <p className='uppercase'><Link href='Standing'>full standing</Link></p>
           </button>
            </div>
          <div className='flex items-center mb-6'>
            <p className='w-[40%]'>Select Team</p>
            <select
              className='w-full p-2 border border-[#101828] rounded'
              onChange={handleTeamChange}
              value={selectedTeam ? selectedTeam.id : ''}
            >
              <option value='' disabled>
                Select a team
              </option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          <div className='w-full'>
            {selectedTeam ? (
              <div>
                <div className='w-full'>
                <Image src={selectedTeam.image || Lak} alt={selectedTeam.name} width={300} height={300} className='w-full'/>
                </div>
                <h2 className='text-[32px] text-[#344054] font-[600] text-center mt-2 uppercase'>{selectedTeam.name}</h2>
                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Team Members Information</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.information}</p>
                <div className='flex justify-between my-2'>
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={200} className='w-[100px] h-[100px]'/> 
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]'/>
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]'/>
                </div>
                </div>
                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Team Principal</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.information}</p>
                <div className='flex justify-between my-2'>
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={200} className='w-[100px] h-[100px]'/> 
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]'/>
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]'/>
                </div>
                </div>

                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Drivers</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.information}</p>
                <div className='flex justify-between my-2'>
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={200} className='w-[100px] h-[100px]'/> 
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]'/>
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]'/>
                </div>
                </div>

                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Team Performance</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.information}</p>
                <div className='flex justify-between my-2 gap-4'>
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={200} className='w-[100px] h-[100px]'/> 
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]' />
                <Image src={selectedTeam.image2 || Men} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]' />
                </div>
                </div>
              </div>
            ) : (
              <p>Select a team to view their information.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default TeamPage;