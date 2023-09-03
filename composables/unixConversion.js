function unixConversion(unixTime, now) {
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  const timeDifference = currentTime - unixTime;

  if (timeDifference < 5) {
    return "A few seconds ago";
  } else if (timeDifference < 60) {
    return `${timeDifference} seconds ago`;
  } else if (timeDifference < 3600) {
    const minutes = Math.floor(timeDifference / 60);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (timeDifference < 86400) {
    const hours = Math.floor(timeDifference / 3600);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (timeDifference < 604800) {
    const days = Math.floor(timeDifference / 86400);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (timeDifference < 2419200) {
    const weeks = Math.floor(timeDifference / 604800);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (timeDifference < 29030400) {
    const months = Math.floor(timeDifference / 2419200);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(timeDifference / 29030400);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
}

export { unixConversion };
