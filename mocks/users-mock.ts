export interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    address: string;
    height: number;
    weight: number;
    gender: 'male' | 'female';
    friends: number[];
  }
  
  export const usersMock: User[] = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      age: 28,
      address: "123 Elm Street, Springfield, IL",
      height: 165,
      weight: 60,
      gender: "female",
      friends: [2, 3, 4]
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      age: 32,
      address: "456 Oak Avenue, Metropolis, NY",
      height: 178,
      weight: 75,
      gender: "male",
      friends: [1, 3, 6, 7, 8]
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      age: 22,
      address: "789 Pine Road, Gotham, NJ",
      height: 170,
      weight: 68,
      gender: "male",
      friends: [1, 2, 4, 9]
    },
    {
      id: 4,
      name: "Diana Prince",
      email: "diana.prince@example.com",
      age: 27,
      address: "101 Maple Lane, Star City, CA",
      height: 172,
      weight: 62,
      gender: "female",
      friends: [1, 3, 5, 10, 11, 18, 23, 28, 34, 39]
    },
    {
      id: 5,
      name: "Ethan Hunt",
      email: "ethan.hunt@example.com",
      age: 35,
      address: "202 Birch Boulevard, Central City, OH",
      height: 180,
      weight: 80,
      gender: "male",
      friends: [1, 4, 6, 12]
    },
    {
      id: 6,
      name: "Fiona Gallagher",
      email: "fiona.gallagher@example.com",
      age: 30,
      address: "303 Cedar Court, Smallville, KS",
      height: 168,
      weight: 65,
      gender: "female",
      friends: [2, 5, 7, 13, 14]
    },
    {
      id: 7,
      name: "George Martin",
      email: "george.martin@example.com",
      age: 40,
      address: "404 Redwood Drive, Coast City, TX",
      height: 175,
      weight: 78,
      gender: "male",
      friends: [2, 6, 8, 15]
    },
    {
      id: 8,
      name: "Hannah Baker",
      email: "hannah.baker@example.com",
      age: 24,
      address: "505 Spruce Street, Keystone City, FL",
      height: 160,
      weight: 55,
      gender: "female",
      friends: [2, 7, 9, 16, 28, 31]
    },
    {
      id: 9,
      name: "Ian Somerhal",
      email: "ian.somerhal@example.com",
      age: 34,
      address: "606 Willow Way, National City, WA",
      height: 182,
      weight: 82,
      gender: "male",
      friends: [3, 8, 10, 17, 18]
    },
    {
      id: 10,
      name: "Jessica Day",
      email: "jessica.day@example.com",
      age: 29,
      address: "707 Palm Path, Blüdhaven, AZ",
      height: 158,
      weight: 54,
      gender: "female",
      friends: [4, 9, 11, 19, 21, 27, 29]
    },
    {
      id: 11,
      name: "Kevin Hart",
      email: "kevin.hart@example.com",
      age: 38,
      address: "808 Poplar Place, Midway City, CO",
      height: 160,
      weight: 70,
      gender: "male",
      friends: [4, 10, 12, 20]
    },
    {
      id: 12,
      name: "Laura Croft",
      email: "laura.croft@example.com",
      age: 26,
      address: "909 Fir Street, St. Roch, MA",
      height: 170,
      weight: 58,
      gender: "female",
      friends: [5, 11, 13, 14]
    },
    {
      id: 13,
      name: "Michael Scott",
      email: "michael.scott@example.com",
      age: 45,
      address: "1010 Cypress Circle, Ivy Town, VA",
      height: 176,
      weight: 85,
      gender: "male",
      friends: [6, 12, 14, 15, 16]
    },
    {
      id: 14,
      name: "Nancy Drew",
      email: "nancy.drew@example.com",
      age: 23,
      address: "1111 Elmwood Lane, Opal City, OR",
      height: 162,
      weight: 57,
      gender: "female",
      friends: [6, 12, 13, 17]
    },
    {
      id: 15,
      name: "Oscar Wilde",
      email: "oscar.wilde@example.com",
      age: 33,
      address: "1212 Aspen Alley, Fawcett City, NV",
      height: 174,
      weight: 77,
      gender: "male",
      friends: [7, 13, 16, 18]
    },
    {
      id: 16,
      name: "Pam Beesly",
      email: "pam.beesly@example.com",
      age: 28,
      address: "1313 Birch Bend, Hub City, UT",
      height: 166,
      weight: 60,
      gender: "female",
      friends: [8, 13, 15, 17, 19]
    },
    {
      id: 17,
      name: "Quincy Adams",
      email: "quincy.adams@example.com",
      age: 36,
      address: "1414 Maple Grove, Happy Harbor, WY",
      height: 181,
      weight: 79,
      gender: "male",
      friends: [9, 14, 16, 18, 20]
    },
    {
      id: 18,
      name: "Rachel Green",
      email: "rachel.green@example.com",
      age: 31,
      address: "1515 Oak Terrace, Dakota City, NM",
      height: 164,
      weight: 59,
      gender: "female",
      friends: [9, 15, 17, 19]
    },
    {
      id: 19,
      name: "Steve Rogers",
      email: "steve.rogers@example.com",
      age: 37,
      address: "1616 Pine Hollow, El Paso, TX",
      height: 183,
      weight: 84,
      gender: "male",
      friends: [10, 16, 18, 20]
    },
    {
      id: 20,
      name: "Tina Fey",
      email: "tina.fey@example.com",
      age: 34,
      address: "1717 Spruce Valley, Albuquerque, NM",
      height: 161,
      weight: 58,
      gender: "female",
      friends: [11, 17, 19]
    },
    {
      id: 21,
      name: "Ursula K. LeGuin",
      email: "ursula.leguin@example.com",
      age: 42,
      address: "1818 Beechwood Blvd, Anytown, CA",
      height: 160,
      weight: 57,
      gender: "female",
      friends: [22, 23, 24, 25]
    },
    {
      id: 22,
      name: "Victor Hugo",
      email: "victor.hugo@example.com",
      age: 46,
      address: "1919 Juniper Ave, Anytown, TX",
      height: 178,
      weight: 75,
      gender: "male",
      friends: [21, 23, 26, 27]
    },
    {
      id: 23,
      name: "Walt Whitman",
      email: "walt.whitman@example.com",
      age: 51,
      address: "2020 Oak St, Anytown, NY",
      height: 175,
      weight: 78,
      gender: "male",
      friends: [21, 22, 24, 28]
    },
    {
      id: 24,
      name: "Xena Warrior",
      email: "xena.warrior@example.com",
      age: 35,
      address: "2121 Elm St, Anytown, FL",
      height: 165,
      weight: 60,
      gender: "female",
      friends: [21, 23, 25, 29]
    },
    {
      id: 25,
      name: "Yara Greyjoy",
      email: "yara.greyjoy@example.com",
      age: 30,
      address: "2222 Maple Ave, Anytown, WA",
      height: 168,
      weight: 65,
      gender: "female",
      friends: [21, 24, 26, 30]
    },
    {
      id: 26,
      name: "Zane Grey",
      email: "zane.grey@example.com",
      age: 28,
      address: "2323 Pine Rd, Anytown, OR",
      height: 180,
      weight: 80,
      gender: "male",
      friends: [22, 25, 27, 31]
    },
    {
      id: 27,
      name: "Amelia Earhart",
      email: "amelia.earhart@example.com",
      age: 32,
      address: "2424 Cedar Ct, Anytown, CO",
      height: 170,
      weight: 62,
      gender: "female",
      friends: [22, 26, 28, 32]
    },
    {
      id: 28,
      name: "Beatrix Kiddo",
      email: "beatrix.kiddo@example.com",
      age: 29,
      address: "2525 Spruce Dr, Anytown, AZ",
      height: 172,
      weight: 58,
      gender: "female",
      friends: [23, 27, 29, 33]
    },
    {
      id: 29,
      name: "Clint Eastwood",
      email: "clint.eastwood@example.com",
      age: 40,
      address: "2626 Fir Ln, Anytown, NV",
      height: 183,
      weight: 84,
      gender: "male",
      friends: [24, 28, 30, 34]
    },
    {
      id: 30,
      name: "Dorothy Gale",
      email: "dorothy.gale@example.com",
      age: 27,
      address: "2727 Ash St, Anytown, NM",
      height: 158,
      weight: 54,
      gender: "female",
      friends: [25, 29, 31, 35]
    },
    {
      id: 31,
      name: "Edgar Allan Poe",
      email: "edgar.poe@example.com",
      age: 38,
      address: "2828 Redwood Rd, Anytown, OK",
      height: 176,
      weight: 85,
      gender: "male",
      friends: [26, 30, 32, 36]
    },
    {
      id: 32,
      name: "F. Scott Fitzgerald",
      email: "f.scott.fitzgerald@example.com",
      age: 44,
      address: "2929 Poplar Pl, Anytown, UT",
      height: 174,
      weight: 77,
      gender: "male",
      friends: [27, 31, 33, 37]
    },
    {
      id: 33,
      name: "Georgia O'Keeffe",
      email: "georgia.okeeffe@example.com",
      age: 31,
      address: "3030 Cypress Cir, Anytown, WY",
      height: 166,
      weight: 60,
      gender: "female",
      friends: [28, 32, 34, 38]
    },
    {
      id: 34,
      name: "Harry Houdini",
      email: "harry.houdini@example.com",
      age: 37,
      address: "3131 Aspen Alley, Anytown, AL",
      height: 164,
      weight: 59,
      gender: "male",
      friends: [29, 33, 35, 39]
    },
    {
      id: 35,
      name: "Isabella Swan",
      email: "isabella.swan@example.com",
      age: 25,
      address: "3232 Birch Bend, Anytown, GA",
      height: 161,
      weight: 58,
      gender: "female",
      friends: [30, 34, 36, 40]
    },
    {
      id: 36,
      name: "Jack Sparrow",
      email: "jack.sparrow@example.com",
      age: 41,
      address: "3333 Maple Grove, Anytown, MS",
      height: 181,
      weight: 79,
      gender: "male",
      friends: [31, 35, 37, 41]
    },
    {
      id: 37,
      name: "Katniss Everdeen",
      email: "katniss.everdeen@example.com",
      age: 26,
      address: "3434 Oak Hollow, Anytown, TN",
      height: 164,
      weight: 59,
      gender: "female",
      friends: [32, 36, 38, 42]
    },
    {
      id: 38,
      name: "Lara Croft",
      email: "lara.croft@example.com",
      age: 33,
      address: "3535 Pine Hill, Anytown, KY",
      height: 175,
      weight: 65,
      gender: "female",
      friends: [33, 37, 39, 43]
    },
    {
      id: 39,
      name: "Michael Jordan",
      email: "michael.jordan@example.com",
      age: 45,
      address: "3636 Fir Ridge, Anytown, NE",
      height: 198,
      weight: 98,
      gender: "male",
      friends: [34, 38, 40, 44]
    },
    {
      id: 40,
      name: "Nancy Wheeler",
      email: "nancy.wheeler@example.com",
      age: 29,
      address: "3737 Spruce Valley, Anytown, ND",
      height: 162,
      weight: 57,
      gender: "female",
      friends: [35, 39, 41, 45]
    }
  ];
  