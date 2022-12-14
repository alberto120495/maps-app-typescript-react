export async function getUserLocation(): Promise<[number, number]> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.longitude, coords.latitude]);
      },
      (err) => {
        alert("No se pudo obtener la geolocation");
        console.log(err);
        reject(err);
      }
    );
  });
}

export default getUserLocation;
