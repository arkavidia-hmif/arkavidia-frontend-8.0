/* eslint-disable @typescript-eslint/no-empty-interface */
import EyeShowIcon from '../Icon/EyeShowIcon'

interface ICard {}

const Card: React.FC<ICard> = () => {
  const posts = [
    {
      title: 'ARKAVIDIA',
      date: '19 september 2022',
      views: '100',
      img: 'https://www.colorhexa.com/bfbfbf.png',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec convallis lectus. In ante eros, dapibus in gravida iaculis, ullamcorper ut orci. Cras interdum diam velit, ac varius dolor vulputate quis.'
    }
  ]
  return (
    <>
      <div
        className="grid-cols-4 grid gap-2 h-[210px] mx-3 mt-5
        xl:h-[470px] xl:gap-14 xl:mt-5 xl:mx-5
        lg:h-[430px] lg:gap-10 lg:mt-5 lg:mx-5
        md:h-[375px] md:gap-8 md:mt-5 md:mx-4
        sm:h-[290px] sm:gap-4 sm:mt-5 sm:mx-4"
      >
        {posts.map((items, key) => (
          <div
            className="bg-gray200 rounded-xl h-[220px]
            xl:h-[440px] 
            lg:h-[405px]
            md:h-[360px]
            sm:h-[290px]"
            key={key}
          >
            <img
              className="rounded-2xl w-11/12 h-[70px] mt-1.5 mx-auto px-0.5
              xl:h-2/5 xl:mt-4
              lg:h-[150px] lg:mt-3
              md:h-[120px] md:mt-2.5
              sm:h-[100px] sm:mt-2"
              src={items.img}
              alt="image"
            />
            <div
              className="font-helvatica text-[6px] mx-2 
              xl:text-[12px] xl:mx-6
              lg:text-[10px] lg:mx-5
              md:text-[9px] md:mx-4
              sm:text-[8px] sm:mx-3"
            >
              <div
                className="flex justify-between mt-1
                xl:mt-3
                lg:mt-3
                md:mt-2
                sm:mt-1"
              >
                <p className="leading-normal">{items.date}</p>
                <p className="leading-normal flex">
                  <EyeShowIcon
                    className="text-blue300 mr-0
                    xl:mr-2
                    lg:mr-2
                    md:mr-1
                    sm:mr-1"
                  />
                  {items.views}
                </p>
              </div>
              <h4
                className="font-archivo mt-0 text-[13px] font-semibold text-yellow300 
                xl:text-2xl xl:mt-4
                lg:text-[20px] lg:mt-3
                md:text-[18px] md:mt-2
                sm:text-[14px] sm:mt-1"
              >
                {items.title}
              </h4>
              <p
                className="leading-normal mt-0
                xl:mt-1
                lg:mt-1
                md:mt-1
                sm:mt-0"
              >
                {items.content}
              </p>
              <div className="text-center">
                <button
                  className="text-center mt-2 mb-4 px-[20px] py-[3px] text-[9px] font-medium text-white bg-red300 rounded-xl hover:bg-red200 hover:drop-shadow-lg transition-all active:bg-red400 
                  xl:px-[112px] xl:py-[12px] xl:text[16px] xl:mt-6
                  lg:px-[80px] lg:py-[10px] lg:text-[14px] lg:mt-5
                  md:px-[55px] md:py-[7px] md:text-[12px] md:mt-4
                  sm:px-[30px] sm:py-[4px] sm:text-[10px] sm:mt-3"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        ))}
        {posts.map((items, key) => (
          <div
            className="bg-gray200 rounded-xl h-[220px]
              xl:h-[440px] 
              lg:h-[405px]
              md:h-[360px]
              sm:h-[290px]"
            key={key}
          >
            <img
              className="rounded-2xl w-11/12 h-[100px] mt-1.5 mx-auto px-0.5
              xl:h-[245px] xl:mt-4
              lg:h-[210px] lg:mt-3
              md:h-[180px] md:mt-2.5
              sm:h-[150px] sm:mt-2"
              src={items.img}
              alt="image"
            />
            <div
              className="font-helvatica text-[6px] mx-2 
              xl:text-[12px] xl:mx-6
              lg:text-[10px] lg:mx-5
              md:text-[9px] md:mx-4
              sm:text-[8px] sm:mx-3"
            >
              <div
                className="flex justify-between mt-1
                xl:mt-3
                lg:mt-3
                md:mt-2
                sm:mt-1"
              >
                <p className="leading-normal">{items.date}</p>
                <p className="leading-normal flex">
                  <EyeShowIcon
                    className="text-blue300 mr-0
                    xl:mr-2
                    lg:mr-2
                    md:mr-1
                    sm:mr-1"
                  />
                  {items.views}
                </p>
              </div>
              <h4
                className="font-archivo mt-0 text-[13px] font-semibold text-yellow300 
                xl:text-2xl xl:mt-4
                lg:text-[20px] lg:mt-3
                md:text-[18px] md:mt-2
                sm:text-[14px] sm:mt-1"
              >
                {items.title}
              </h4>
              <p
                className="leading-normal mt-0
                xl:mt-1
                lg:mt-1
                md:mt-1
                sm:mt-0"
              >
                {items.content}
              </p>
            </div>
          </div>
        ))}
        {posts.map((items, key) => (
          <div
            className="bg-gray200 rounded-xl h-[220px]
              xl:h-[440px] 
              lg:h-[405px]
              md:h-[360px]
              sm:h-[290px]"
            key={key}
          >
            <img
              className="rounded-2xl w-11/12 h-[87px] mt-1.5 mx-auto px-0.5
              xl:h-[210px] xl:mt-4
              lg:h-[185px] lg:mt-3
              md:h-[155px] md:mt-2.5
              sm:h-[125px] sm:mt-2"
              src={items.img}
              alt="image"
            />
            <div
              className="font-helvatica text-center text-[6px] mx-2 
              xl:text-[12px] xl:mx-6
              lg:text-[10px] lg:mx-5
              md:text-[9px] md:mx-4
              sm:text-[8px] sm:mx-3"
            >
              <h4
                className="font-archivo mt-2 text-[13px] font-semibold text-yellow300 
                xl:text-2xl xl:mt-4
                lg:text-[20px] lg:mt-3
                md:text-[18px] md:mt-3
                sm:text-[14px] sm:mt-2"
              >
                {items.title}
              </h4>
              <p
                className="leading-normal mt-0
                xl:mt-1
                lg:mt-1
                md:mt-1
                sm:mt-0"
              >
                {items.content}
              </p>
              <div className="text-center">
                <button
                  className="text-center mt-1.5 mb-4 px-[20px] py-[3px] text-[9px] font-medium text-white bg-red300 rounded-xl hover:bg-red200 hover:drop-shadow-lg transition-all active:bg-red400 
                  xl:px-[112px] xl:py-[12px] xl:text[16px] xl:mt-5.5
                  lg:px-[80px] lg:py-[10px] lg:text-[14px] lg:mt-4.5
                  md:px-[55px] md:py-[7px] md:text-[12px] md:mt-3.5
                  sm:px-[30px] sm:py-[4px] sm:text-[10px] sm:mt-2.5"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        ))}
        {posts.map((items, key) => (
          <div
            className="bg-gray200 rounded-xl h-[220px]
              xl:h-[440px] 
              lg:h-[405px]
              md:h-[360px]
              sm:h-[290px]"
            key={key}
          >
            <img
              className="rounded-2xl w-11/12 h-[110px] mt-1.5 mx-auto px-0.5
              xl:h-[270px] xl:mt-4
              lg:h-[240px] lg:mt-3
              md:h-[200px] md:mt-2.5
              sm:h-[160px] sm:mt-2"
              src={items.img}
              alt="image"
            />
            <div
              className="text-center font-helvatica text-[6px] mx-2 
              xl:text-[12px] xl:mx-6
              lg:text-[10px] lg:mx-5
              md:text-[9px] md:mx-4
              sm:text-[8px] sm:mx-3"
            >
              <h4
                className="font-archivo mt-2 text-[13px] font-semibold text-yellow300 
                xl:text-2xl xl:mt-4
                lg:text-[20px] lg:mt-3
                md:text-[18px] md:mt-3
                sm:text-[14px] sm:mt-2"
              >
                {items.title}
              </h4>
              <p
                className="leading-normal mt-0
                xl:mt-1
                lg:mt-1
                md:mt-1
                sm:mt-0"
              >
                {items.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="grid mt-5 mx-3 gap-2 grid-cols-2
      xl:h-[350px] xl:gap-14 xl:mt-5 xl:mx-5
      lg:h-[290px] lg:gap-10 lg:mt-5 lg:mx-5
      md:h-[233px] md:gap-8 md:mt-5 md:mx-4
      sm:h-[195px] sm:gap-4 sm:mt-5 sm:mx-4"
      >
        {posts.map((items, key) => (
          <div
            className="bg-gray200 flex h-[140px] rounded-xl
        xl:h-[320px] 
        lg:h-[260px]
        md:h-[220px]
        sm:h-[195px]"
            key={key}
          >
            <img
              className="rounded-2xl w-screen h-[127px] mt-1.5 ml-1.5
          xl:h-[285px] xl:mt-4 xl:ml-4
          lg:h-[235px] lg:mt-3 lg:ml-3
          md:h-[200px] md:mt-2.5 md:ml-2.5
          sm:h-[178px] sm:mt-2 sm:ml-2"
              src={items.img}
              alt="image"
            />
            <div
              className="font-helvatica text-[6px] mx-2 
          xl:text-[12px] xl:mx-6
          lg:text-[10px] lg:mx-5
          md:text-[9px] md:mx-4
          sm:text-[8px] sm:mx-3"
            >
              <div
                className="flex justify-between mt-3
            xl:mt-11
            lg:mt-9
            md:mt-7
            sm:mt-5"
              >
                <p className="leading-normal">{items.date}</p>
                <p className="leading-normal flex">
                  <EyeShowIcon
                    className="text-blue300 mr-0
                xl:mr-2
                lg:mr-2
                md:mr-1
                sm:mr-1"
                  />
                  {items.views}
                </p>
              </div>
              <h4
                className="font-archivo mt-0 text-[13px] font-semibold text-yellow300 
            xl:text-2xl xl:mt-4
            lg:text-[20px] lg:mt-3
            md:text-[18px] md:mt-2
            sm:text-[14px] sm:mt-1"
              >
                {items.title}
              </h4>
              <p
                className="leading-normal mt-0
            xl:mt-1
            lg:mt-1
            md:mt-1
            sm:mt-0"
              >
                {items.content}
              </p>
              <div className="text-center">
                <button
                  className="text-center mt-2 mb-4 px-[20px] py-[3px] text-[9px] font-medium text-white bg-red300 rounded-xl hover:bg-red200 hover:drop-shadow-lg transition-all active:bg-red400 
              xl:px-[112px] xl:py-[12px] xl:text[16px] xl:mt-6
              lg:px-[80px] lg:py-[10px] lg:text-[14px] lg:mt-5
              md:px-[55px] md:py-[7px] md:text-[12px] md:mt-4
              sm:px-[30px] sm:py-[4px] sm:text-[10px] sm:mt-3"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        ))}

        {posts.map((items, key) => (
          <div
            className="bg-gray200 flex h-[140px] rounded-xl
        xl:h-[320px] 
        lg:h-[260px]
        md:h-[220px]
        sm:h-[195px]"
            key={key}
          >
            <img
              className="rounded-2xl w-screen h-[127px] mt-1.5 ml-1.5
          xl:h-[285px] xl:mt-4 xl:ml-4
          lg:h-[235px] lg:mt-3 lg:ml-3
          md:h-[200px] md:mt-2.5 md:ml-2.5
          sm:h-[178px] sm:mt-2 sm:ml-2"
              src={items.img}
              alt="image"
            />
            <div
              className="text-center font-helvatica text-[6px] mx-2 mt-4 
          xl:text-[12px] xl:mx-6 xl:mt-11
          lg:text-[10px] lg:mx-5 lg:mt-7
          md:text-[9px] md:mx-4 md:mt-5
          sm:text-[8px] sm:mx-3 sm:mt-6"
            >
              <h4
                className="font-archivo mt-0 text-[13px] font-semibold text-yellow300 
            xl:text-2xl xl:mt-4
            lg:text-[20px] lg:mt-3
            md:text-[18px] md:mt-2
            sm:text-[14px] sm:mt-1"
              >
                {items.title}
              </h4>
              <p
                className="leading-normal mt-0
            xl:mt-1
            lg:mt-1
            md:mt-1
            sm:mt-0"
              >
                {items.content}
              </p>
              <div className="text-center">
                <button
                  className="text-center mt-2 mb-4 px-[20px] py-[3px] text-[9px] font-medium text-white bg-red300 rounded-xl hover:bg-red200 hover:drop-shadow-lg transition-all active:bg-red400 
              xl:px-[112px] xl:py-[12px] xl:text[16px] xl:mt-6
              lg:px-[80px] lg:py-[10px] lg:text-[14px] lg:mt-5
              md:px-[55px] md:py-[7px] md:text-[12px] md:mt-4
              sm:px-[30px] sm:py-[4px] sm:text-[10px] sm:mt-3"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="grid mt-3 mx-3 gap-2 grid-cols-2
      xl:h-[350px] xl:gap-14 xl:mt-5 xl:mx-5
      lg:h-[290px] lg:gap-10 lg:mt-5 lg:mx-5
      md:h-[233px] md:gap-8 md:mt-5 md:mx-4
      sm:h-[195px] sm:gap-4 sm:mt-5 sm:mx-4"
      >
        {posts.map((items, key) => (
          <div
            className="bg-gray200 flex h-[140px] rounded-xl
        xl:h-[320px] 
        lg:h-[260px]
        md:h-[220px]
        sm:h-[195px]"
            key={key}
          >
            <img
              className="rounded-2xl w-screen h-[127px] mt-1.5 ml-1.5
          xl:h-[285px] xl:mt-4 xl:ml-4
          lg:h-[235px] lg:mt-3 lg:ml-3
          md:h-[200px] md:mt-2.5 md:ml-2.5
          sm:h-[178px] sm:mt-2 sm:ml-2"
              src={items.img}
              alt="image"
            />
            <div
              className="font-helvatica text-[6px] mx-2 mt-3
          xl:text-[12px] xl:mx-6 xl:mt-10
          lg:text-[10px] lg:mx-5 lg:mt-6
          md:text-[9px] md:mx-4 md:mt-5
          sm:text-[8px] sm:mx-3 sm:mt-4"
            >
              <div
                className="flex justify-between mt-3
            xl:mt-11
            lg:mt-9
            md:mt-7
            sm:mt-5"
              >
                <p className="leading-normal">{items.date}</p>
                <p className="leading-normal flex">
                  <EyeShowIcon
                    className="text-blue300 mr-0
                xl:mr-2
                lg:mr-2
                md:mr-1
                sm:mr-1"
                  />
                  {items.views}
                </p>
              </div>
              <h4
                className="font-archivo mt-0 text-[13px] font-semibold text-yellow300 
            xl:text-2xl xl:mt-4
            lg:text-[20px] lg:mt-3
            md:text-[18px] md:mt-2
            sm:text-[14px] sm:mt-1"
              >
                {items.title}
              </h4>
              <p
                className="leading-normal mt-0
            xl:mt-1
            lg:mt-1
            md:mt-1
            sm:mt-0"
              >
                {items.content}
              </p>
            </div>
          </div>
        ))}

        {posts.map((items, key) => (
          <div
            className="bg-gray200 flex h-[140px] rounded-xl
        xl:h-[320px] 
        lg:h-[260px]
        md:h-[220px]
        sm:h-[195px]"
            key={key}
          >
            <img
              className="rounded-2xl w-screen h-[127px] mt-1.5 ml-1.5
          xl:h-[285px] xl:mt-4 xl:ml-4
          lg:h-[235px] lg:mt-3 lg:ml-3
          md:h-[200px] md:mt-2.5 md:ml-2.5
          sm:h-[178px] sm:mt-2 sm:ml-2"
              src={items.img}
              alt="image"
            />
            <div
              className="text-center font-helvatica text-[6px] mx-2 mt-8 
        xl:text-[12px] xl:mx-6 xl:mt-20
        lg:text-[10px] lg:mx-5 lg:mt-16
        md:text-[9px] md:mx-4 md:mt-11
        sm:text-[8px] sm:mx-3 sm:mt-10"
            >
              <h4
                className="font-archivo mt-0 text-[13px] font-semibold text-yellow300 
          xl:text-2xl xl:mt-4
          lg:text-[20px] lg:mt-3
          md:text-[18px] md:mt-2
          sm:text-[14px] sm:mt-1"
              >
                {items.title}
              </h4>
              <p
                className="leading-normal mt-0
          xl:mt-1
          lg:mt-1
          md:mt-1
          sm:mt-0"
              >
                {items.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="grid-cols-4 grid gap-2 h-[175px] mx-3 mt-3
      xl:h-[300px] xl:gap-14 xl:mt-5 xl:mx-5
      lg:h-[285px] lg:gap-10 lg:mt-5 lg:mx-5
      md:h-[260px] md:gap-8 md:mt-5 md:mx-4
      sm:h-[215px] sm:gap-4 sm:mt-5 sm:mx-4"
      >
        {posts.map((items, key) => (
          <div
            className="bg-gray200 rounded-xl h-[160px]
        xl:h-[275px] 
        lg:h-[260px]
        md:h-[240px]
        sm:h-[195px]"
            key={key}
          >
            <div
              className="font-helvatica text-[6px] mx-2 
          xl:text-[12px] xl:mx-6
          lg:text-[10px] lg:mx-5
          md:text-[9px] md:mx-4
          sm:text-[8px] sm:mx-3"
            >
              <div
                className="flex justify-between mt-3
            xl:mt-7
            lg:mt-6
            md:mt-5
            sm:mt-4"
              >
                <p className="leading-normal">{items.date}</p>
                <p className="leading-normal flex">
                  <EyeShowIcon
                    className="text-blue300 mr-0
                xl:mr-2
                lg:mr-2
                md:mr-1
                sm:mr-1"
                  />
                  {items.views}
                </p>
              </div>
              <h4
                className="font-archivo mt-0 text-[13px] font-semibold text-yellow300 
            xl:text-2xl xl:mt-4
            lg:text-[20px] lg:mt-3
            md:text-[18px] md:mt-2
            sm:text-[14px] sm:mt-1"
              >
                {items.title}
              </h4>
              <p
                className="leading-normal mt-0
            xl:mt-1
            lg:mt-1
            md:mt-1
            sm:mt-0"
              >
                {items.content}
              </p>
              <div className="text-center">
                <button
                  className="text-center mt-2 mb-4 px-[20px] py-[3px] text-[9px] font-medium text-white bg-red300 rounded-xl hover:bg-red200 hover:drop-shadow-lg transition-all active:bg-red400 
              xl:px-[112px] xl:py-[12px] xl:text[16px] xl:mt-6
              lg:px-[80px] lg:py-[10px] lg:text-[14px] lg:mt-5
              md:px-[55px] md:py-[7px] md:text-[12px] md:mt-4
              sm:px-[30px] sm:py-[4px] sm:text-[10px] sm:mt-3"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        ))}
        {posts.map((items, key) => (
          <div
            className="bg-gray200 rounded-xl h-[130px]
        xl:h-[210px] 
        lg:h-[200px]
        md:h-[190px]
        sm:h-[160px]"
            key={key}
          >
            <div
              className="font-helvatica text-[6px] mx-2 
          xl:text-[12px] xl:mx-6
          lg:text-[10px] lg:mx-5
          md:text-[9px] md:mx-4
          sm:text-[8px] sm:mx-3"
            >
              <div
                className="flex justify-between mt-3
            xl:mt-7
            lg:mt-6
            md:mt-5
            sm:mt-4"
              >
                <p className="leading-normal">{items.date}</p>
                <p className="leading-normal flex">
                  <EyeShowIcon
                    className="text-blue300 mr-0
                xl:mr-2
                lg:mr-2
                md:mr-1
                sm:mr-1"
                  />
                  {items.views}
                </p>
              </div>
              <h4
                className="font-archivo mt-0 text-[13px] font-semibold text-yellow300 
            xl:text-2xl xl:mt-4
            lg:text-[20px] lg:mt-3
            md:text-[18px] md:mt-2
            sm:text-[14px] sm:mt-1"
              >
                {items.title}
              </h4>
              <p
                className="leading-normal mt-0
            xl:mt-1
            lg:mt-1
            md:mt-1
            sm:mt-0"
              >
                {items.content}
              </p>
            </div>
          </div>
        ))}
        {posts.map((items, key) => (
          <div
            className="bg-gray200 rounded-xl h-[145px]
        xl:h-[245px] 
        lg:h-[240px]
        md:h-[215px]
        sm:h-[175px]"
            key={key}
          >
            <div
              className="text-center font-helvatica text-[6px] mx-2 
          xl:text-[12px] xl:mx-6
          lg:text-[10px] lg:mx-5
          md:text-[9px] md:mx-4
          sm:text-[8px] sm:mx-3"
            >
              <h4
                className="font-archivo mt-3 text-[13px] font-semibold text-yellow300 
            xl:text-2xl xl:mt-7
            lg:text-[20px] lg:mt-6
            md:text-[18px] md:mt-5
            sm:text-[14px] sm:mt-4"
              >
                {items.title}
              </h4>
              <p
                className="leading-normal mt-0
            xl:mt-1
            lg:mt-1
            md:mt-1
            sm:mt-0"
              >
                {items.content}
              </p>
              <div className="text-center">
                <button
                  className="text-center mt-2 mb-4 px-[20px] py-[3px] text-[9px] font-medium text-white bg-red300 rounded-xl hover:bg-red200 hover:drop-shadow-lg transition-all active:bg-red400 
              xl:px-[112px] xl:py-[12px] xl:text[16px] xl:mt-6
              lg:px-[80px] lg:py-[10px] lg:text-[14px] lg:mt-5
              md:px-[55px] md:py-[7px] md:text-[12px] md:mt-4
              sm:px-[30px] sm:py-[4px] sm:text-[10px] sm:mt-3"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        ))}
        {posts.map((items, key) => (
          <div
            className="bg-gray200 rounded-xl h-[115px]
        xl:h-[180px] 
        lg:h-[180px]
        md:h-[170px]
        sm:h-[140px]"
            key={key}
          >
            <div
              className="text-center font-helvatica text-[6px] mx-2 
          xl:text-[12px] xl:mx-6
          lg:text-[10px] lg:mx-5
          md:text-[9px] md:mx-4
          sm:text-[8px] sm:mx-3"
            >
              <h4
                className="font-archivo mt-3 text-[13px] font-semibold text-yellow300 
            xl:text-2xl xl:mt-7
            lg:text-[20px] lg:mt-6
            md:text-[18px] md:mt-5
            sm:text-[14px] sm:mt-4"
              >
                {items.title}
              </h4>
              <p
                className="leading-normal mt-0
            xl:mt-1
            lg:mt-1
            md:mt-1
            sm:mt-0"
              >
                {items.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Card
