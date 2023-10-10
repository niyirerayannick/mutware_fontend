<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="single-page-header-inner">
          <div class="left-side">
            <div class="header-details">
              <div class="row">
                <div class="col-md-3 card">
                  <div class="skeleton-box"></div>
                </div>
                <div class="col-md-3 card">
                  <div class="skeleton-box"></div>
                </div>
                <div class="col-md-3 card">
                  <div class="skeleton-box"></div>
                </div>
                <!-- <div class="col-md-3 card">
                  <div class="skeleton-box"></div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

.row {
  margin-left : 25px;
}
.col-md-3 {
  padding: 0.1rem;
  background-color: white;
  border-radius: 12px;
  margin-bottom: 8px;
}
.skeleton-box {
  width: 92%;
  height: 10.9em;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 12px;
  margin-bottom: 10px;
  margin-top: 8px;
  margin-left:  12px;
  padding: 0.7rem;
}

.skeleton-line {
  width: 92%;
  height: 0.5em;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-left: 12px;
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
