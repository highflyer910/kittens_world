<template>
    <div class="loader-container">
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/779a0737-7e6e-4e69-845e-5f739211bf46/d9m0nzc-4556c39d-60b0-41b9-ab4e-11c66fc72330.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3OWEwNzM3LTdlNmUtNGU2OS04NDVlLTVmNzM5MjExYmY0NlwvZDltMG56Yy00NTU2YzM5ZC02MGIwLTQxYjktYWI0ZS0xMWM2NmZjNzIzMzAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fjgInOTSyWUOsVQqmDRbTvQRU82O5-yMb2l8lKe5_Mc" alt="Loading..." />
    </div>
  </template>
  
  <script>
  export default {
    name: "Spinner",
  };
  </script>
  
  <style>
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  @media (max-width: 600px) {
    .loader-container {
      flex-direction: column;
      padding-block: 200px;
    }
  }
  </style>
  