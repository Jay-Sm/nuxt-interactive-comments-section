import { db, auth } from "~/firebase/";
import { collection, getDocs, updateDoc, addDoc, doc as dbDoc, query } from "firebase/firestore";
const votesRef = collection(db, "votes");
const user = auth.currentUser;


async function addVote(voteValue, voteCastPostId) {
  // // console.log(voteCastPostId);
  // const q = query(votesRef);
  // const querySnapshot = await getDocs(q);

  // querySnapshot.forEach((voteDoc) => {
  //   const voteOwnerPostId = voteDoc.data().owner_post_id;
  //   const postOwnerUid = voteDoc.data().owner_vote_uid;
  //   // console.log(voteDoc.data())

  //   if (voteOwnerPostId === voteCastPostId) {
  //     if (postOwnerUid === user.uid) {
  //       const voteRef = dbDoc(db, "votes", voteDoc.id);
  //       updateDoc(voteRef, {
  //         vote_value: voteValue,
  //       });
  //     }
  //   } else {
  //     // console.log('Owner post of vote', voteOwnerPostId);
  //     // console.log('Vote cast to', voteCastPostId);
  //     addDoc(votesRef, {
  //       owner_post_id: voteCastPostId,
  //       owner_vote_uid: user.uid,
  //       vote_value: voteValue,
  //     });
  //   }
  // });
}

export { addVote };
