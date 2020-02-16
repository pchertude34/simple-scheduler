import { db } from '../firebaseConfig';

const PHOTO_SHOOT_COLLECTION = 'photo-shoots';

export function loadPhotoShoots() {
  // Get all of the upcoming photo shoots
  return db
    .collection(PHOTO_SHOOT_COLLECTION)
    .get()
    .then(querySnapshot => {
      const photoShoots = [];

      querySnapshot.forEach(doc => {
        photoShoots.push(doc.data());
      });

      return photoShoots;
    });
}
