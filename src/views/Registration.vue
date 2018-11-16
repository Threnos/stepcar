<template>
<div class="registration">
  <form class="container w-50 mx-auto my-5 py-5 text-black text-center position-relative">

<!-- РЕГИСТРАЦИЯ -->
    <div id="step1" v-bind:style="{ left: offsetStep + 'px' }" class="w-100 p-4 form-background position-absolute">
      <p class="h1 text-center">РЕГИСТРАЦИЯ</p>

      <p class="h2 text-center mt-4 mb-0">Новая учётная запись</p>
      <hr class="border-top border-dark position-relative hr-divider w-75 mb-5 mt-0">

      <input type="email" v-model="form.accountEmail" class="form-control my-3 mx-auto text-center w-50" placeholder="Email" required>

      <input type="phone" v-model="form.accountPhone" class="form-control my-3 mx-auto text-center w-50" placeholder="Телефон" required>

      <input type="password" v-model="form.accountPass" class="form-control my-3 mx-auto text-center w-50" placeholder="Пароль" required>

      <div class="row mt-3">
        <div class="col text-right">
          <button type="submit" class="border-0 bg-transparent nextButton" v-on:click.prevent="nextForm"><span class="h4 text-dark">Далее</span><img src="@/assets/img/icons/transfer.png" class="w-25 ml-2 mb-1" alt=""></button>
        </div>
      </div>
    </div>
<!-- РЕГИСТРАЦИЯ -->

<!-- ШАГ-1 -->
    <div id="step2" v-bind:style="{ left: (clientWidth + offsetStep) + 'px' }" class="w-100 p-4 form-background position-absolute">
      <p class="h2 text-center mt-4 mb-0">Шаг 1/3: Основные данные</p>
      <hr class="border-top border-dark position-relative hr-divider w-75 mb-5 mt-0">

      <input type="text" v-model="form.washName" class="form-control my-3 mx-auto text-center w-50" placeholder="Название мойки" required>

      <input type="text" v-model="form.washAdress" class="form-control my-3 mx-auto text-center w-50" placeholder="Адрес" required>

      <div class="input-group w-50 mx-auto mb-3">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile01">
          <label class="custom-file-label" for="inputGroupFile01">Выбрать фото</label>
        </div>
      </div>

      <div class="input-group w-50 mx-auto" v-for="(item, n) in phoneInputs" :key="n">
        <input type="phone" v-model="item.phone" class="form-control my-2 mx-auto text-center w-50" placeholder="Телефон мойки" v-on:input="addPhoneInput(n)">
        <i class="material-icons my-3 removePhone" v-on:click="removePhone(n)">close</i>
      </div>

      <input type="text" v-model="form.washSite" class="form-control my-3 mx-auto text-center w-50" placeholder="Ссылка на соцсети">

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
<!-- ШАГ-1 -->

<!-- ШАГ-2 -->
    <div id="step3" v-bind:style="{ left: (clientWidth*2 + offsetStep) + 'px' }" class="w-100 p-4 form-background position-absolute">
      <p class="h2 text-center mt-4 mb-0">Шаг 2/3: Основные услуги</p>
      <hr class="border-top border-dark position-relative hr-divider w-75 mb-5 mt-0">

      <div class="form-group">
        <p class="h5 font-weight-normal">Добавление групп ТС</p>

        <div class="input-group w-50 mx-auto" v-for="(item, n) in groupInputs" :key="n">
          <input type="text" v-model="item.group" class="form-control my-2 mx-auto text-center w-50" placeholder="Например, легковые" v-on:input="addGroupInput(n)">
          <i class="material-icons my-3 removePhone" v-on:click="removeGroup(n)">close</i>
        </div>
      </div>

      <div class="form-group">
        <p class="h5 font-weight-normal">Добавление услуг</p>

        <input type="text" class="form-control my-3 mx-auto text-center w-50" placeholder="Название услуги" required>

        <textarea class="form-control my-3 mx-auto text-center w-50" rows="5" placeholder="Описание услуги"></textarea>

        <div class="input-froup w-50 mx-auto bg-light">
          <table class="table table-sm">
            <thead>
              <tr>
                <th class="font-weight-normal">Группа</th>
                <th class="font-weight-normal">Время</th>
                <th class="font-weight-normal">Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(itemS, n) in groupsServices" :key="n">
                <td>
                  <select v-model="itemS.group">
                    <option v-for="(itemI, i) in groupInputs" :key="i">{{ itemI.group }}</option>
                  </select>
                </td>
                <td>
                  <input type="text" class="w-75" v-model="itemS.time" placeholder="мин.">
                </td>
                <td>
                  <input type="text" class="w-75" v-model="itemS.cost" placeholder="руб.">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
<!-- ШАГ-2 -->

<!-- ШАГ-3 -->
    <div id="step4" v-bind:style="{ left: (clientWidth*3 + offsetStep) + 'px' }" class="w-100 p-4 form-background position-absolute">
      <p class="h2 text-center mt-4 mb-0">Шаг 3/3: Прочее</p>
      <hr class="border-top border-dark position-relative hr-divider w-75 mb-5 mt-0">

      <label for="ownerPhone" class="h4 font-weight-light">Номер телефона владельца автомойки</label>
      <input type="text" id="ownerPhone" class="form-control mb-3 mx-auto text-center w-50" v-model="ownerPhone" placeholder="+7(000)-000-00-00" required>

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

        <div class="form-check" v-for="(item, n) in payType" :key="n">
          <input class="form-check-input mt-2" type="checkbox" v-model="item.value" v-bind:id="item.label">
          <label class="form-check-label h4 font-weight-light" v-bind:for="item.label">{{ item.text }}</label>
        </div>
      </div>

      <div class="form-group w-75 my-5 mx-auto px-4 text-left">
        <p class="h4 font-weight-light text-center">Комфорт</p>

        <div class="form-check" v-for="(item, n) in comfort" :key="n">
          <input class="form-check-input mt-2" type="checkbox" v-model="item.value" v-bind:id="item.label">
          <label class="form-check-label h4 font-weight-light" v-bind:for="item.label">{{ item.text }}</label>
        </div>
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
  </form>
</div>
</template>

<script>
import { CONST } from './../components/const'

export default {
  name: 'registration',
  mixins: [CONST],

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
      phoneInputs: [
        {
          phone: ''
        }
      ],
      groupInputs: [
        {
          group: ''
        }
      ],
      payType: [
        {
          value: '',
          label: 'payCash',
          text: 'Наличный'
        },
        {
          value: '',
          label: 'payCashless',
          text: 'Безналичный'
        },
        {
          value: '',
          label: 'payOnline',
          text: 'Онлайн'
        }
      ],

      ownerPhone: '',

      comfort: [
        {
          value: '',
          label: 'comfortWifi',
          text: 'Wi-Fi'
        },
        {
          value: '',
          label: 'comfortRestZone',
          text: 'Зона отдыха'
        },
        {
          value: '',
          label: 'comfortConditioner',
          text: 'Кондиционер'
        },
        {
          value: '',
          label: 'comfortCoffee',
          text: 'Кофе'
        },
        {
          value: '',
          label: 'comfortWater',
          text: 'Вода'
        },
        {
          value: '',
          label: 'comfortTv',
          text: 'Телефизор'
        },
        {
          value: '',
          label: 'comfortCafe',
          text: 'Кафе'
        },
        {
          value: '',
          label: 'comfortAtm',
          text: 'Банкомат'
        },
        {
          value: '',
          label: 'comfortStore',
          text: 'Магазин'
        },
        {
          value: '',
          label: 'comfortCctv',
          text: 'Видеонаблюдение'
        },
        {
          value: '',
          label: 'comfortWc',
          text: 'Туалет'
        },
        {
          value: '',
          label: 'comfortWashstand',
          text: 'Умывальник'
        }
      ],
      groupInputs: [
        {
          group: ''
        }
      ],
      groupsServices: [
        {
          group: '',
          time: '',
          cost: ''
        }
      ],
      nextPhoneInput: 0,
      nextGroupInput: 0
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
    addPhoneInput: function (n) {
      if (this.nextPhoneInput === n && this.nextPhoneInput < this.MAX_WASH_PHONES - 1) {
        this.phoneInputs.push({
          phone: ''
        })
        this.nextPhoneInput++
      }
    },
    removePhone: function (n) {
      if (n !== this.nextPhoneInput) {
        this.phoneInputs.splice(n, 1)
        this.nextPhoneInput = this.phoneInputs.length - 1
      }
    },
    addGroupInput: function (n) {
      if (this.nextGroupInput === n && this.nextGroupInput < this.MAX_VEHICLE_GROUPS - 1) {
        this.groupInputs.push({
          group: ''
        })
        this.nextGroupInput++
      }
    },
    removeGroup: function (n) {
      if (n !== this.nextGroupInput) {
        this.groupInputs.splice(n, 1)
        this.nextGroupInput = this.groupInputs.length - 1
      }
    }
  }
}
</script>

<style>
.form-background {
  background: linear-gradient(to bottom, #7f7f7f, rgba(127, 127, 127, 0.7)) no-repeat 0 0
}

#step1, #step2, #step3, #step4 {
  transition: all 0.3s ease-in-out
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

.hr-divider::before, .hr-divider::after{
  display: block;
  content: "";
  background-color: black;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 666px;
  position: absolute;
  top: -0.4rem
}
.hr-divider::before{
  left: -0.5rem
}
.hr-divider::after{
  right: -0.5rem
}

.nextButton {}

.prevButton img {
  transform: rotate(180deg)
}

.removePhone{
  cursor: pointer
}

input[type=checkbox] {
  transform: scale(1.45)
}
</style>
