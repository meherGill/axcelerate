'use client';

import FullListSearch from "../components/full-list-search/FullListSearch";
export default function Home() {
  const mockData = {
    'Attending': [
      {
        name: "Alex",
        email: "a@123.com"
      },
      {
        name: "Barry",
        email: "b@123.com"
      },
      {
        name: "Katherine",
      },
    ],
    'Absent': [
      {
        name: "Arise",
        email: "ar@123.com"
      },
      {
        name: "Bathlamore",
        email: "brit@123.com"
      },
      {
        name: "Kranti",
        imageSrc: "pic1.svg"
      },
    ]
  }

  return (
    <div>
      <FullListSearch data={mockData}/>
    </div>
  )
}
