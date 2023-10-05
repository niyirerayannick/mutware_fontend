<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="single-page-header-inner">
          <div class="left-side">
            <div class="header-details">
              <div class="row">
                <div class="col-xl-3">
                  <div class="skeleton-box"></div>
                </div>
                <div class="col-xl-3">
                  <div class="skeleton-box"></div>
                </div>
                <div class="col-xl-3">
                  <div class="skeleton-box"></div>
                </div>
                <div class="col-xl-3">
                  <div class="skeleton-box"></div>
                </div>
              </div>
              <!-- <div class="skeleton-line"></div>
              <div class="skeleton-line"></div>
              <div class="margin-top-30">
                <div class="skeleton-line"></div>
                <div class="skeleton-line"></div>
                <div class="skeleton-line"></div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.skeleton-box {
  width: 100%;
  height: 10.9em;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 3s infinite linear;
  border-radius: 12px;
  margin-bottom: 10px;
}

.skeleton-line {
  width: 100%;
  height: 0.5em;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 4px;
  margin-bottom: 10px;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
