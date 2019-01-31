<template>
  <div class="container w-50 mx-auto text-black text-center position-relative">

<!-- РЕГИСТРАЦИЯ -->
    <form id="step1" v-bind:style="{ left: offsetStep + 'px' }" class="w-100 p-4 form-background position-absolute">
      <p class="h1 text-center">РЕГИСТРАЦИЯ</p>

      <p class="h2 text-center mt-4 mb-0">Новая учётная запись</p>
      <hr class="border-top border-dark position-relative hr-divider w-75 mb-5 mt-0">

      <div class="form-group mt-3 mb-1 mx-auto w-50">
        <input type="text" v-model.lazy.trim="$v.accountEmail.$model" class="form-control text-center"
        :class="{ 'border border-danger': $v.accountEmail.$error }" placeholder="E-mail">
        <div class="div-err" v-if="$v.accountEmail.$error && $v.accountEmail.email">Заполните поле</div>
        <div class="div-err" v-if="!$v.accountEmail.email">Введите корректный e-mail</div>
      </div>

      <div class="form-group mt-3 mb-1 mx-auto w-50">
        <input type="tel" v-model.trim="$v.accountPhone.$model" class="form-control text-center"
        :class="{ 'border border-danger': $v.accountPhone.$error }" v-mask="'+38 (###) ###-####'" placeholder="Телефон">
        <div class="div-err" v-if="$v.accountPhone.$error">Заполните поле</div>
      </div>

      <div class="form-group mt-3 mb-1 mx-auto w-50">
        <input type="password" v-model.trim="$v.accountPass.$model" class="form-control text-center"
        :class="{ 'border border-danger': $v.accountPass.$error }" placeholder="Пароль">
        <div class="div-err" v-if="$v.accountPass.$error">Заполните поле</div>
      </div>

      <div class="row mt-3">
        <div class="col text-right">
          <button type="submit" class="border-0 bg-transparent nextButton" v-on:click.prevent="nextForm"><span class="h4 text-dark">Далее</span><img src="@/assets/img/icons/transfer.png" class="w-25 ml-2 mb-1" alt=""></button>
        </div>
      </div>
    </form>
<!-- РЕГИСТРАЦИЯ -->

<!-- ШАГ-1 -->
    <form id="step2" v-bind:style="{ left: (clientWidth + offsetStep) + 'px' }" class="w-100 p-4 form-background position-absolute">
      <p class="h2 text-center mt-4 mb-0">Шаг 1/3: Основные данные</p>
      <hr class="border-top border-dark position-relative hr-divider w-75 mb-5 mt-0">

      <input type="text" v-model="washName" class="form-control my-3 mx-auto text-center w-50" placeholder="Название мойки">

      <input type="text" v-model="washAdress" class="form-control my-3 mx-auto text-center w-50" placeholder="Адрес">

      <div class="input-group w-50 mx-auto mb-3">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputFile">
          <label class="custom-file-label text-left" for="inputFile">Выбрать фото</label>
        </div>
      </div>

      <div class="input-group w-50 mx-auto" v-for="(item, n) in phoneInputs" :key="n">
        <input type="phone" v-model="item.phone" class="form-control my-2 mx-auto text-center w-50" placeholder="Телефон мойки" v-on:input="addPhoneInput(n)">
        <i class="material-icons my-3 removePhone" v-on:click="removePhone(n)">close</i>
      </div>

      <input type="text" v-model="washSite" class="form-control my-3 mx-auto text-center w-50" placeholder="Ссылка на соцсети">

      <input type="date" v-model="washDate">

      <div class="row mt-3">
        <div class="col text-left">
          <button type="submit" class="border-0 bg-transparent prevButton" v-on:click.prevent="prevForm"><img src="@/assets/img/icons/transfer.png" class="w-25 mr-2 mb-1 rotate180" alt=""><span class="h4 text-dark">Назад</span></button>
        </div>
        <div class="col text-right">
          <button type="submit" class="border-0 bg-transparent nextButton" v-on:click.prevent="nextForm"><span class="h4 text-dark">Далее</span><img src="@/assets/img/icons/transfer.png" class="w-25 ml-2 mb-1" alt=""></button>
        </div>
      </div>
    </form>
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

      <p class="h5 font-weight-normal">Добавление услуг</p>
      <div class="form-group mb-5" v-for="(item, n) in groupsServices" :key="n">

        <input type="text" class="form-control my-3 mx-auto text-center w-50" v-model="item.name" placeholder="Название услуги" v-on:input="addServicesInput(n)">

        <textarea class="form-control my-3 mx-auto text-center w-50" rows="3" v-model="item.desc" placeholder="Описание услуги"></textarea>

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
              <tr>
                <td>
                  <select v-model="item.group">
                    <option v-for="(itemI, i) in groupInputs" :key="i">{{ itemI.group }}</option>
                  </select>
                </td>
                <td>
                  <input type="text" class="w-75" v-model="item.time" placeholder="мин.">
                </td>
                <td>
                  <input type="text" class="w-75" v-model="item.cost" placeholder="руб.">
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

      <label class="h4 font-weight-light">
        Номер телефона владельца автомойки
        <input type="text" class="form-control mt-2 mx-auto text-center w-50" v-model="ownerPhone" placeholder="+7(000)-000-00-00">
      </label>

      <label class="mt-4 h4 font-weight-light">
        Средняя длительность мойки
        <input type="text" class="form-control mt-2 mx-auto text-center w-25" v-model="washTimeFrom" placeholder="мин.">
      </label>

      <div class="form-group w-75 my-5 mx-auto px-4 text-left">
        <div class="form-check">
          <label class="form-check-label h4 font-weight-light">
            <input class="form-check-input mt-2" type="checkbox" v-model="wantSite">
            Хочу личный сайт
          </label>

          <div v-if="wantSite == true">
            <input type="text" v-model="wantSiteAdress">
            <span class="h5 font-weight-light">.stepcar.ru</span>
          </div>

        </div>
      </div>

      <div class="form-group w-75 my-5 mx-auto px-4 text-left">
        <p class="h4 font-weight-light text-center">Тип оплаты</p>

        <div class="form-check" v-for="(item, n) in payType" :key="n">

          <label class="form-check-label h4 font-weight-light">
            <input class="form-check-input mt-2" type="checkbox" v-model="item.value">
            {{ item.text }}
          </label>
        </div>
      </div>

      <div class="form-group w-75 my-5 mx-auto px-4 text-left">
        <p class="h4 font-weight-light text-center">Комфорт</p>

        <div class="form-check" v-for="(item, n) in comfort" :key="n">

          <label class="form-check-label h4 font-weight-light">
            <input class="form-check-input mt-2" type="checkbox" v-model="item.value">
            {{ item.text }}
          </label>
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
</div>
</template>

<script>
import { CONST } from './../components/const'
import { required, email } from 'vuelidate/lib/validators'

export default {
  mixins: [CONST],

  validations: {
    accountEmail: { required, email },
    accountPhone: { required },
    accountPass: { required }
  },

  data () {
    return {
      accountEmail: '',
      accountPhone: '',
      accountPass: '',
      washName: '',
      washAdress: '',
      washPhoto: '',
      washPhone: '',
      washDate: '',
      washSite: '',

      phoneInputs: [ { phone: '' } ],
      payType: [
        {
          value: false,
          text: 'Наличный'
        },
        {
          value: false,
          text: 'Безналичный'
        },
        {
          value: false,
          text: 'Онлайн'
        }
      ],

      averageWash: '',

      comfort: [
        {
          value: false,
          text: 'Wi-Fi'
        },
        {
          value: false,
          text: 'Зона отдыха'
        },
        {
          value: false,
          text: 'Кондиционер'
        },
        {
          value: false,
          text: 'Кофе'
        },
        {
          value: false,
          text: 'Вода'
        },
        {
          value: false,
          text: 'Телефизор'
        },
        {
          value: false,
          text: 'Кафе'
        },
        {
          value: false,
          text: 'Банкомат'
        },
        {
          value: false,
          text: 'Магазин'
        },
        {
          value: false,
          text: 'Видеонаблюдение'
        },
        {
          value: false,
          text: 'Туалет'
        },
        {
          value: false,
          text: 'Умывальник'
        }
      ],
      serviceAdd: [

      ],
      groupInputs: [ { group: '' } ],
      groupsServices: [
        {
          name: '',
          desc: '',
          group: '',
          time: '',
          cost: ''
        }
      ],
      ownerPhone: '',
      washTimeFrom: '',
      washTimeTo: '',
      wantSite: false,
      wantSiteAdress: '',

      clientWidth: document.body.clientWidth,
      offsetStep: 0,

      nextPhoneInput: 0,
      nextGroupInput: 0,
      nextServiceInput: 0
    }
  },
  methods: {
    nextForm () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.offsetStep -= this.clientWidth
        return this.offsetStep
      }
    },
    prevForm () {
      this.offsetStep += this.clientWidth
      return this.offsetStep
    },
    addPhoneInput (n) {
      if (this.nextPhoneInput === n && this.nextPhoneInput < this.MAX_WASH_PHONES - 1) {
        this.phoneInputs.push({
          phone: ''
        })
        this.nextPhoneInput++
      }
    },
    removePhone (n) {
      if (n !== this.nextPhoneInput) {
        this.phoneInputs.splice(n, 1)
        this.nextPhoneInput = this.phoneInputs.length - 1
      }
    },
    addGroupInput (n) {
      if (this.nextGroupInput === n && this.nextGroupInput < this.MAX_VEHICLE_GROUPS - 1) {
        this.groupInputs.push({
          group: ''
        })
        this.nextGroupInput++
      }
    },
    removeGroup (n) {
      if (n !== this.nextGroupInput) {
        this.groupInputs.splice(n, 1)
        this.nextGroupInput = this.groupInputs.length - 1
      }
    },
    addServicesInput (n) {
      if (this.nextServiceInput === n && this.nextServiceInput < this.MAX_SERVICES_GROUPS - 1) {
        this.groupsServices.push({
          name: '',
          desc: '',
          group: '',
          time: '',
          cost: ''
        })
        this.nextServiceInput++
      }
    },
    removeServices (n) {
      if (n !== this.nextServiceInput) {
        this.groupsServices.splice(n, 1)
        this.nextServiceInput = this.groupsServices.length - 1
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

.prevButton img {
  transform: rotate(180deg)
}

.removePhone{
  cursor: pointer
}

input[type=checkbox], input[type=radio] {
  transform: scale(1.45)
}
</style>
