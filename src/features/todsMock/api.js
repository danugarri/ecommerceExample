import {mock} from './mock/mock';
// A mock function to mimic making an async request for data
export function fetchData() {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: mock }), 500)
    );
  }
  