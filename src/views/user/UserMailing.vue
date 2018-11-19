<template lang="html">
  <div class="container py-3">
    <p class="h3 text-center">Рассылка</p>
    <hr class="border-top border-dark position-relative hr-divider w-75 mb-5 mt-0">

    <div class="container-fluid p-4 bg-2light">
      <form class="w-100">
        <div class="row m-0 p-4 w-100 bg-3lighter">

          <div class="col-2 text-right">
            <p class="h5 font-weight-normal text-center">Отправить:</p>
          </div>

          <div class="col-4">
            <input class="form-check-input mt-2" type="checkbox" v-model="checkSMS" id="sms">
            <label class="form-check-label h4 font-weight-light" for="sms">СМС - сообщением</label>
            <br>
            <input class="form-check-input mt-2" type="checkbox" v-model="checkEmail" id="email">
            <label class="form-check-label h4 font-weight-light" for="email">E-mail</label>
            <br>
            <input class="form-check-input mt-2" type="checkbox" v-model="checkTeleg" id="teleg">
            <label class="form-check-label h4 font-weight-light" for="teleg">Telegram</label>
          </div>

          <div class="col-6">
            <div class="row">
              <div class="col pr-0">
                <div class="form-check">
                  <input class="form-check-input mt-2" type="radio" v-model="radio" value="radioAll" id="radioAll">
                  <label class="form-check-label h4 font-weight-light" for="radioAll">Все</label>
                </div>
              </div>

              <div class="w-100"></div>

              <div class="col pr-0">
                <div class="row">

                  <div class="col-5 pr-0">
                    <div class="form-check">
                      <input class="form-check-input mt-2" type="radio" v-model="radio" value="radioActive" id="radioActive">
                      <label class="form-check-label h4 font-weight-light" for="radioActive">Активные</label>
                    </div>
                  </div>

                  <div class="col p-0" v-if="radio == 'radioActive'">
                    <div class="mb-2 d-flex justify-content-between">
                      <span>C</span>
                      <input type="date" v-model="dateFrom" value="">
                    </div>
                    <div class="d-flex justify-content-between">
                      <span>По</span>
                      <input type="date" v-model="dateTo" value="">
                    </div>
                  </div>

                  <div class="w-100"></div>

                  <div class="col pr-0" v-if="radio == 'radioActive'">
                    <div class="row">
                      <div class="col p-0 text-center">
                        <p class="h5 font-weight-normal">По типу кузова:</p>
                      </div>
                      <div class="col p-0">
                        <input class="form-check-input mt-2" type="checkbox" v-model="checkLight" id="checkLight">
                        <label class="form-check-label h4 font-weight-light" for="checkLight">Легковые</label>
                        <br>
                        <input class="form-check-input mt-2" type="checkbox" v-model="checkSuv" id="checkSuv">
                        <label class="form-check-label h4 font-weight-light" for="checkSuv">Внедорожники</label>
                        <br>
                        <input class="form-check-input mt-2" type="checkbox" v-model="checkMicro" id="check">
                        <label class="form-check-label h4 font-weight-light" for="checkMicro">Микроавтобусы</label>
                        <br>
                        <input class="form-check-input mt-2" type="checkbox" v-model="checkTruck" id="check">
                        <label class="form-check-label h4 font-weight-light" for="checkTruck">Грузовики</label>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        <div class="text-left">
          <input type="text" v-model="mailHeading" class="form-control my-3 w-100 mx-auto w-50" placeholder="Заголовок сообщения" required>
          <textarea v-model="mailText" class="form-control my-3 w-100 mx-auto w-50" rows="3" cols="2" placeholder="Сообщение" required></textarea>
        </div>

          <div class="w-100 text-right">
            <button type="button" class="border border-light">Отправить</button>
          </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserMailing',
  data () {
    return {
      checkSMS: false,
      checkEmail: false,
      checkTeleg: false,
      radio: 'All',
      dateFrom: '',
      dateTo: '',
      checkLight: false,
      checkSuv: false,
      checkMicro: false,
      checkTruck: false,
      mailHeading: '',
      mailText: ''
    }
  }
}
</script>

<style lang="css">
</style>
