enum Directions3 {
  Up,
  Down,
}

Directions3[0]; // Up
Directions3[1]; // Down

// In JS we'll have generated object with IFII function with link on itself
enum links {
  youtube = "https://youtube.com",
  facebook = "https://facebook.com",
}

links.youtube; // "https://youtube.com"

// const enum - without generation object, values will be generate if we access the key
const enum links2 {
  youtube = "https://youtube.com",
  facebook = "https://facebook.com",
}
