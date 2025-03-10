import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useBackNavigation = () => {
  const navigate = useNavigate();
  let timer;

  const goBack = () => {
    navigate(-1);
  };

  const HandleMoveToMenu = async (MenuId, cord) => {
    if(!MenuId) return ;
    const waitForElement = (menuId) => {
      return new Promise((resolve, reject) => {
        const checkExist = setInterval(() => {
          const targetElement = document.querySelector(`[Product-last-location='${menuId}']`);
          if (targetElement) {
            clearInterval(checkExist);
            resolve(targetElement); 
          }
        }, 100); 
        setTimeout(() => {
          clearInterval(checkExist);
          reject(new Error(`Product with MenuId: ${menuId} not found`));
        }, 3000); 
      });
    };

    try {
      const targetElement = await waitForElement(MenuId);
      
      const rect = targetElement.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top;
      const IsCoord = cord ? cord : 100;
      window.scrollTo({
        top: offsetTop - IsCoord,
        behavior: 'smooth'
      });
      timer = setTimeout(() => {
        sessionStorage.setItem("ProductId", "");
        sessionStorage.setItem("LastViewedCart", "");
        sessionStorage.setItem("LastViewedWishlist", "");
        sessionStorage.setItem("LookbookLastViewed", "");
      }, 1000);

    } catch (error) {
      console.error(error);
      console.log(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return { goBack, HandleMoveToMenu };
};

export default useBackNavigation;
