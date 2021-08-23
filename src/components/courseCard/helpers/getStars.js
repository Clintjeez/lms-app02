export default function getStars(rating) {
  switch (parseFloat(rating)) {
    case 0.0:
      return [0, 0, 0, 0, 0];
      
    case 0.5:
      return [50, 0, 0, 0, 0];
      
    case 1:
      return [100, 0, 0, 0, 0];
      
    case 1.5:
      return [100, 50, 0, 0, 0];
      
    case 2:
      return [100, 100, 0, 0, 0];
      
    case 2.5:
      return [100, 100, 50, 0, 0];
      
    case 3:
      return [100, 100, 100, 0, 0];
    
    case 3.5:
      return [100, 100, 100, 50, 0];
      
    case 4:
      return [100, 100, 100, 100, 0];
      
    case 4.5:
      return [100, 100, 100, 100, 50];
      
    case 5:
      return [100, 100, 100, 100, 100];
      
    default:
      return [0, 0, 0, 0, 0];
  }
}
