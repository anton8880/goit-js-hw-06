const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createGalleryIt = ({ url, alt }) => 
  `<li><img scr="${url}" alt="${alt}" width = 150 height = 100></li>`;
  const gallMarkUp = images.reduce(
    (acc, item) => acc + createGalleryIt(item),
    ""
  );

const gallList = document.querySelector("#gallery");
gallList.insertAdjacentHTML("afterbegin", gallMarkUp);
gallList.setAttribute("style", "list-style-type:none; display: flex;");