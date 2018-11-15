<template>
<div class="registration">
  <form class="container w-50 mx-auto my-5 py-5 text-black text-center position-relative">

<!-- ШАГ-1 -->
    <div id="step1" v-bind:style="{ left: offsetStep + 'px' }" class="w-100 p-4 form-background position-absolute">
      <p class="h1 text-center">РЕГИСТРАЦИЯ</p>

      <p class="h2 text-center my-4">Шаг 1/4: Новая учётная запись</p>
      <hr class="border-top border-dark w-75 mb-5">

      <input type="email" v-model="form.accountEmail" class="form-control my-3 mx-auto text-center w-50" placeholder="Email" required>

      <input type="phone" v-model="form.accountPhone" class="form-control my-3 mx-auto text-center w-50" placeholder="Телефон" required>

      <input type="password" v-model="form.accountPass" class="form-control my-3 mx-auto text-center w-50" placeholder="Пароль" required>

      <div class="row mt-3">
        <div class="col text-right">
          <button type="submit" class="border-0 bg-transparent nextButton" v-on:click.prevent="nextForm"><span class="h4 text-dark">Далее</span><img src="@/assets/img/icons/transfer.png" class="w-25 ml-2 mb-1" alt=""></button>
        </div>
      </div>
    </div>
<!-- ШАГ-1 -->

<!-- ШАГ-2 -->
    <div id="step2" v-bind:style="{ left: (clientWidth + offsetStep) + 'px' }" class="w-100 p-4 form-background position-absolute">
      <p class="h2 text-center my-4">Шаг 2/4: Основные данные</p>
      <hr class="border-top border-dark w-75 mb-5">

      <input type="text" v-model="form.washName" class="form-control my-3 mx-auto text-center w-50" placeholder="Название мойки" required>

      <input type="text" v-model="form.washAdress" class="form-control my-3 mx-auto text-center w-50" placeholder="Адрес" required>

      <div class="input-group w-50 mx-auto mb-3">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile01">
          <label class="custom-file-label" for="inputGroupFile01">Выбрать фото</label>
        </div>
      </div>


      <input type="phone" v-for="item in phoneInputs" v-bind:id="item.id" v-model="item.washPhone" class="form-control my-3 mx-auto text-center w-50" placeholder="Телефон мойки" required v-on:input="addPhoneInput(item.id)">

      <input type="date" v-model="form.washDate">

      <div class="row mt-3">
        <div class="col text-left">
          <button type="submit" class="border-0 bg-transparent prevButton" v-on:click.prevent="prevForm"><img src="@/assets/img/icons/transfer.png" class="w-25 mr-2 mb-1 rotate180" alt=""><span class="h4 text-dark">Назад</span></button>
        </div>
        <div class="col text-right">
          <button type="submit" class="border-0 bg-transparent nextButton" v-on:click.prevent="nextForm"><span class="h4 text-dark">Далее</span><img src="@/assets/img/icons/transfer.png" class="w-25 ml-2 mb-1" alt=""></button>
        </div>
      </div>
    </div>
<!-- ШАГ-2 -->

<!-- ШАГ-3 -->
    <div id="step3" v-bind:style="{ left: (clientWidth*2 + offsetStep) + 'px' }" class="w-100 p-4 form-background position-absolute">
      <p class="h2 text-center my-4">Шаг 3/4: Основные услуги</p>
      <hr class="border-top border-dark w-75 mb-5">

      <div class="form-group">
        <p class="h5 font-weight-normal">Добавление групп ТС</p>

        <input type="text" class="form-control my-3 mx-auto text-center w-50" placeholder="Легковые" required>
      </div>

      <div class="form-group">
        <p class="h5 font-weight-normal">Добавление услуг</p>

        <input type="text" class="form-control my-3 mx-auto text-center w-50" placeholder="Название услуги" required>

        <textarea class="form-control my-3 mx-auto text-center w-50" rows="5" placeholder="Описание услуги"></textarea>
      </div>

      <div class="row mt-3">
        <div class="col text-left">
          <button type="submit" class="border-0 bg-transparent prevButton" v-on:click.prevent="prevForm"><img src="@/assets/img/icons/transfer.png" class="w-25 mr-2 mb-1 rotate180" alt=""><span class="h4 text-dark">Назад</span></button>
        </div>
        <div class="col text-right">
          <button type="submit" class="border-0 bg-transparent nextButton" v-on:click.prevent="nextForm"><span class="h4 text-dark">Далее</span><img src="@/assets/img/icons/transfer.png" class="w-25 ml-2 mb-1" alt=""></button>
        </div>
      </div>
    </div>
<!-- ШАГ-3 -->

<!-- ШАГ-4 -->
    <div id="step4" v-bind:style="{ left: (clientWidth*3 + offsetStep) + 'px' }" class="w-100 p-4 form-background position-absolute">
      <p class="h2 text-center my-4">Шаг 4/4: Прочее</p>
      <hr class="border-top border-dark w-75 mb-5">

      <label for="ownerPhone" class="h4 font-weight-light">Номер телефона владельца автомойки</label>
      <input type="text" id="ownerPhone" class="form-control mb-3 mx-auto text-center w-50" placeholder="+7(000)-000-00-00" required>

      <label for="averageWashFrom" class="my-4 h4 font-weight-light">Средняя длительность мойки</label>
      <div class="row w-75 mx-auto">
        <div class="col">
          <label for="averageWashFrom" class="d-inline mr-2 h5 font-weight-light">От</label>
          <input type="text" id="averageWashFrom" class="form-control mb-3 mx-auto text-center d-inline w-75" required>
        </div>
        <div class="col">
          <label for="averageWashTo" class="d-inline mr-2 h5 font-weight-light">До</label>
          <input type="text" id="averageWashTo" class="form-control mb-3 mx-auto text-center d-inline w-75" required>
        </div>
      </div>

      <div class="form-group w-75 my-5 mx-auto px-4 text-left">
        <div class="form-check">
          <input class="form-check-input mt-2" type="checkbox" value="" id="wantSite">
          <label class="form-check-label h4 font-weight-light" for="wantSite">Хочу личный сайт</label>
        </div>
      </div>

      <div class="form-group w-75 my-5 mx-auto px-4 text-left">
        <p class="h4 font-weight-light text-center">Тип оплаты</p>

        <div class="form-check">
          <input class="form-check-input mt-2" type="checkbox" value="" id="payCash">
          <label class="form-check-label h4 font-weight-light" for="payCash">Наличный</label>
        </div>
        <div class="form-check">
          <input class="form-check-input mt-2" type="checkbox" value="" id="payCashless">
          <label class="form-check-label h4 font-weight-light" for="payCashless">Безналичный</label>
        </div>
        <div class="form-check">
          <input class="form-check-input mt-2" type="checkbox" value="" id="payOnline">
          <label class="form-check-label h4 font-weight-light" for="payOnline">Онлайн</label>
        </div>
      </div>

      <div class="form-group w-75 my-5 mx-auto px-4 text-left">
        <p class="h4 font-weight-light text-center">Комфорт</p>

      </div>

      <div class="row mt-3">
        <div class="col text-left">
          <button type="submit" class="border-0 bg-transparent prevButton" v-on:click.prevent="prevForm"><img src="@/assets/img/icons/transfer.png" class="w-25 mr-2 mb-1 rotate180" alt=""><span class="h4 text-dark">Назад</span></button>
        </div>
        <div class="col text-right">
          <button type="submit" class="border-0 bg-transparent nextButton" v-on:click.prevent="nextForm"><span class="h4 text-dark">Далее</span><img src="@/assets/img/icons/transfer.png" class="w-25 ml-2 mb-1" alt=""></button>
        </div>
      </div>
    </div>
<!-- ШАГ-4 -->
  </form>
</div>
</template>

<script>
export default {
  name: 'registration',

  data () {
    return {
      clientWidth: document.body.clientWidth,
      offsetStep: 0,
      form: {
        accountEmail: '',
        accountPhone: '',
        accountPass: '',
        washName: '',
        washAdress: '',
        washPhoto: '',
        washPhone: '',
        washDate: ''
      },
      phoneInputs: [{
        id: 0,
        phone: ''
      }],
      nextPhoneInput: 0
    }
  },

  methods: {
    nextForm: function () {
      this.offsetStep -= this.clientWidth
      return this.offsetStep
    },
    prevForm: function () {
      this.offsetStep += this.clientWidth
      return this.offsetStep
    },
    addPhoneInput: function (id) {
      if (this.nextPhoneInput == id) {
        this.phoneInputs.push({
          id: this.nextPhoneInput + 1,
          phone: ''
        })
        this.nextPhoneInput++
      }
    }
  }
}
</script>

<style>
body {
  overflow-x: hidden;
}

.form-background {
  background-color: rgba(255, 255, 255, 0.5)
}

#step1,
#step2,
#step3,
#step4 {
  transition: all 0.3s ease-in-out;
}

#step2 {
  left: 100vw
}

#step3 {
  left: 200vw
}

#step4 {
  left: 300vw
}

.nextButton {}

.prevButton img {
  transform: rotate(180deg)
}

input[type=checkbox] {
  transform: scale(1.45);
}
</style>
