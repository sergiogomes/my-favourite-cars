import { ICar } from '../../interfaces/ICar';

// A mock function to mimic making an async request for data
export default function fetchCount(car: ICar) {
  return new Promise<{ data: ICar }>((resolve) => {
    setTimeout(() => resolve({ data: car }), 500);
  });
}
