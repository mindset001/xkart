'use client'
import React, { useState } from 'react';
import { teams } from './data'; // Ensure the path is correct
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image, { StaticImageData } from 'next/image';
import { Modal } from 'antd';
import Link from 'next/link';

type Team = {
  id: number;
  name: string;
  description: string;
  principal: string;
  points: number;
  image: StaticImageData;
  image2: StaticImageData;
  R1: string;
  R2: string;
  R3: string;
  R4: string;
  R5: string;
  R6: string;
  R7: string;
};

const TeamPage = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(teams[0] || null);
  const [open, setOpen] = useState(false)

  const handleTeamClick = (team: Team) => {
    setSelectedTeam(team);
  };
  const handleTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
                className={`cursor-pointer p-2 ${
                  selectedTeam?.id === team.id ? 'bg-[#EF3133] text-white uppercase' : 'bg-white text-black uppercase'
                }`}
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
                <Image src={selectedTeam.image} alt={selectedTeam.name} width={300} height={300} className='w-full'/>
                </div>
                <h2 className='text-[32px] text-[#344054] font-[600] text-center mt-2 uppercase'>{selectedTeam.name}</h2>
                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Team Members Information</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.description}</p>
                <div className='flex justify-between my-2'>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={200} /> 
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
                </div>
                </div>
                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Team Principal</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.description}</p>
                <div className='flex justify-between my-2'>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={200} /> 
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
                </div>
                </div>

                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Drivers</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.description}</p>
                <div className='flex justify-between my-2'>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={200} /> 
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
                </div>
                </div>

                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Team Performance</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.description}</p>
                <div className='flex justify-between my-2 gap-4'>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={200} /> 
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} />
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
                {teams.map((team, index) => (
                  <div key={index} className='text-[14px] font-[400] text-[#101828] py-1 border-b  flex justify-between w-full text-left'>
                    <div className='flex gap-6'>
                    <div>{index + 1}</div>
                    <div>{team.name}</div>
                    </div>
                    <div>{team.points}</div>
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
        // title="Full Standings"
        visible={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <table className='w-full text-left mt-4'>
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th className='text-center'>R1</th>
              <th className='text-center'>R2</th>
              <th className='text-center'>R3</th>
              <th className='text-center'>R4</th>
              <th className='text-center'>R5</th>
              <th className='text-center'>R6</th>
              <th className='text-center'>R7</th>
              <th className='text-center'>Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index} className='border-b my-4'>
                <td>{index + 1}</td>
                <td>{team.name}</td>
                <td className='text-center'>{team.R1 || 'DNF'}</td>
                <td className='text-center'>{team.R2 || 'DNF'}</td>
                <td className='text-center'>{team.R3 || 'DNF'}</td>
                <td className='text-center'>{team.R4 || 'DNF'}</td>
                <td className='text-center'>{team.R5 || 'DNF'}</td>
                <td className='text-center'>{team.R6 || 'DNF'}</td>
                <td className='text-center'>{team.R7 || 'DNF'}</td>
                <td className='text-center'>{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1 className='my-4'>DNF: Did Not Finish</h1>
      </Modal>
     </div>


  {/* mobile section  */}
     <div className=' lg:hidden flex flex-col justify-center items-center'>
     <div className='w-[90%]'>
        <h1 className='my-6 uppercase text-[#101828] text-[28px] font-[600] text-left'>Teams information</h1>
        </div>
        <div className='w-[80%] flex items-start'>
        <button 
            className='bg-[#fff] border-2 text-[#EF3133] border-[#EF3133] rounded-tl-[16px] rounded-br-[16px] flex w-[191px] h-[48px] items-center justify-center '>
             
             <p className='uppercase'><Link href='Standing'>full standing</Link></p>
           </button>
        </div>
        <div className='flex w-[90%] items-center my-4'>
          <div className='w-1/3'>
          <p>Select Team</p>
          </div>
            <div>
            <select onChange={handleTeamChange} value={selectedTeam?.id || ''} className='w-full p-2 bg-white text-black uppercase border border-[#EAECF0] rounded-[8px]'>
              {teams.map((team, index) => (
                <option key={index} value={team.id} className={`cursor-pointer p-2 ${selectedTeam?.id === team.id ? 'bg-[#EF3133] text-white uppercase' : 'bg-white text-black uppercase'}`}>
                  {team.name}
                </option>
              ))}
            </select>
            </div>
          </div>
        
        <div className='w-[90%]'>
            {selectedTeam ? (
              <div>
                <div className='w-full'>
                <Image src={selectedTeam.image} alt={selectedTeam.name} width={300} height={300} className='w-full'/>
                </div>
                <h2 className='text-[32px] text-[#344054] font-[600] text-center mt-2 uppercase'>{selectedTeam.name}</h2>
                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Team Members Information</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.description}</p>
                <div className='flex justify-between my-2'>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={200} className='w-[100px] h-[100px]'/> 
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]'/>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]'/>
                </div>
                </div>
                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Team Principal</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.description}</p>
                <div className='flex justify-between my-2'>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={200} className='w-[100px] h-[100px]'/> 
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]'/>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]'/>
                </div>
                </div>

                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Drivers</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.description}</p>
                <div className='flex justify-between my-2'>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={200} className='w-[100px] h-[100px]'/> 
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]'/>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]'/>
                </div>
                </div>

                <div className='my-4'>
                <h2 className='font-[600] text-[#1D2939] text-[20px]'>Team Performance</h2>
                <p className='my-2 text-[16px] font-[400] text-[#101828] text-justify'>{selectedTeam.description}</p>
                <div className='flex justify-between my-2 gap-4'>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={200} className='w-[100px] h-[100px]'/> 
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]'/>
                <Image src={selectedTeam.image2} alt={selectedTeam.name} width={220} height={300} className='w-[100px] h-[100px]'/>
                </div>
                </div>
              </div>
            ) : (
              <p>Select a team to view their information.</p>
            )}
          </div>
        
      
     </div>
      <Footer />
    </main>
  );
};

export default TeamPage;
