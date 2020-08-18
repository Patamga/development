import React, { useState } from 'react'


const Dummy = () => {
  const [toggleBatton, setToggleButton] = useState(true)
  const buttonClass ='flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700'
  const sidebarClass = 'fixed inset-0 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 pt-16'
  return (
    <div className="w-full max-w-screen-xl mx-auto px-6">
      <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
        <div className="w-full max-w-screen-xl relative mx-auto px-6">
          <div className="flex items-center -mx-6">
            <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
              <div className="flex items-center">
                <a className="block lg:mr-4" href="/">
                  <span className="w-auto hidden sm:block h-12 text-3xl">patamga</span>
                  <span className="w-10 h-10 block sm:hidden text-2xl">patamga</span>
                </a>
              </div>
            </div>
            <div className="flex flex-grow min-w-0 lg:w-3/4 xl:w-4/5 text-gray-500">
              <div className="w-full min-w-0 lg:px-6 xl:w-3/4 xl:px-12">
                {/* <div className="relative">Searh </div> */}
              </div>
              <button
                type="button"
                id="sidebar_open"
                className={toggleBatton ? buttonClass : `${buttonClass} hidden`}
                onClick={() => setToggleButton(!toggleBatton)}
              >
                <svg
                  className="fill-current w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"> </path>
                </svg>
              </button>
              <button
                type="button"
                id="sidebar_close"
                className={toggleBatton ? `${buttonClass} hidden` : buttonClass}
                onClick={() => setToggleButton(!toggleBatton)}
              >
                <svg
                  className="fill-current w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z">
                    {' '}
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        &nbsp;
      </div>
      <div className="w-full max-w-screen-xl mx-auto px-6">
        <div className="lg:flex -mx-6">
          <div id="sidebar" className={toggleBatton ? `${sidebarClass} hidden` : sidebarClass}>
            <div
              id="nawWraper"
              className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-16 bg-white"
            >
              <nav className="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
                <div>1</div>
                <div>2 hhkkgh </div>
              </nav>
            </div>
          </div>
          <div
            id="content"
            className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5"
          >
            <div className=" bg-gray-600 ">2hggjgjhghjjhb bggbkbjbkjb </div>
          </div>
        </div>
      </div>
      <div> </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
