<!doctype html>
<html lang="en">
<head>
    <link rel="icon" href="assets/images/golden-gate-bridge.png">
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>newbieBay</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="assets/fontawesome-free-6.2.0-web/css/fontawesome.min.css"/>
    <link rel="stylesheet" href="assets/fontawesome-free-6.2.0-web/js/fontawesome.min.js"/>
    <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
    <link rel="stylesheet" href="assets/css/style.css"/>
    <link rel="stylesheet" href="./assets/transport/transport.css"/>
</head>
<body>
<div>
    <nav>
        <div class="mx-auto max-w-7xl px-2">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 right-0 flex items-center md:hidden">
                    <!-- Mobile menu button-->
                    <button type="button" id="menu-button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <!--
                          Icon when menu is closed.

                          Heroicon name: outline/bars-3

                          Menu open: "hidden", Menu closed: "block"
                        -->
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <!--
                          Icon when menu is open.

                          Heroicon name: outline/x-mark

                          Menu open: "block", Menu closed: "hidden"
                        -->
                        <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-1 items-center justify-between">
                    <div class="flex flex-shrink-0 items-center">
                        <a class="navbar-brand" href="index.html">
                            <img src="assets/images/golden-gate-bridge.png" alt="logo newbie"/>
                            newbie<span class="orange">Bay</span>
                        </a>
                    </div>
                    <div class="hidden md:ml-6 md:block">
                        <div class="flex space-x-4 items-center">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <a href="./index.html" class="nav-link px-3 py-2 rounded-md font-medium" aria-current="page">
                                <span class="mr-2"><i class="fa-solid fa-house"></i></span>Home
                            </a>

                            <a href="restaurant.html" class="nav-link px-3 py-2 rounded-md font-medium">
                                <span class="mr-2"><i class="fa-solid fa-utensils"></i></span>Restaurant
                            </a>

                            <a href="bart.html" class="nav-link active-nav px-3 py-2 rounded-md font-medium">
                                <span class="mr-2"><i class="fa-solid fa-train"></i></span>Bart
                            </a>

                            <a href="./jobs new.html" class="nav-link px-3 py-2 rounded-md font-medium">
                                <span class="mr-2"><i class="fa-solid fa-briefcase"></i></span>Jobs
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a href="./index.html" class="nav-link px-3 py-2 rounded-md font-medium block" aria-current="page">
                    <span class="mr-2"><i class="fa-solid fa-house"></i></span>Home
                </a>

                <a href="restaurant.html" class="nav-link px-3 py-2 rounded-md font-medium block">
                    <span class="mr-2"><i class="fa-solid fa-utensils"></i></span>Restaurant
                </a>

                <a href="bart.html" class="nav-link active-nav px-3 py-2 rounded-md font-medium block">
                    <span class="mr-2"><i class="fa-solid fa-train"></i></span>Bart
                </a>

                <a href="./jobs new.html" class="nav-link px-3 py-2 rounded-md font-medium">
                    <span class="mr-2"><i class="fa-solid fa-briefcase"></i></span>Jobs
                </a>
            </div>
        </div>
    </nav>
</div>

<section class="py-10 mx-auto max-w-7xl px-2">
    <h3 class="default-heading">Bart</h3>
    <div class="restaurant-search py-5 flex sm:justify-center relative">
        <div class="align-end search">
            <form action="" class="form-search relative flex items-center">
                <input
                        type="text"
                        placeholder="Search"
                        class="form-control search-bar"
                        name=""
                        id="station"
                />
                <div>
                    <button type="button" class="search-btn ">Search</button>
                </div>
                <span class="absolute"
                ><i class="fa-solid fa-magnifying-glass"></i
                ></span>
            </form>
        </div>
    </div>

    <div class="api-section sec-1">
        <div>
          <h2 class="searcHistory">Search history</h2>
        </div>
        <div class="stationContainer" id="stationContainer"></div>
      </div>
      <div class="api-section sec-2">
        <div class="addItCenter">
          <h3 class="stationName"></h3>
        </div>
        <div class="dest"></div>
        <div class="bartMap">
            <div>
                <h2 class="bartDesc">Bart Map</h2>
            </div>
            <div class="bartMap1">
                <img class="bartMapImg" src="./assets/images/bartMap.png" alt="Bart Map" />
            </div>
            
        </div>
      </div>


</section>


<script>
    const button = document.querySelector('#menu-button');
    const menu = document.querySelector('#mobile-menu');


    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

</script>
<script src="./assets/transport/transport.js"></script>
</body>
</html>
