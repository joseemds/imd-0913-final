type auction = {
  id: number;
  award: string;
  description: string;
  active: boolean;
  lastBid: number;
};

const auctions: auction[] = [
  {
    id: 1,
    award: "1 ETH",
    description: "......",
    active: true,
    lastBid: 30000,
  },
  {
    id: 2,
    award: "A bike",
    description: "Bike for your kid",
    active: false,
    lastBid: 30000,

  },
  {
    id: 3,
    award: "A car",
    description: "New car from BMW being auctioned for helping kids",
    active: true,
    lastBid: 0,

  },
  {
    id: 3,
    award: "A car",
    description: "New car from BMW being auctioned for helping kids",
    active: true,
    lastBid: 50000000,
  },
];

export default auctions;