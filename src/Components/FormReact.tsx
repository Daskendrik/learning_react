import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { ICar } from './app.interface';
import React from 'react';

const FormReact = () => {
  const {
    register, //позволяет привызяывать инпуты и прочее к полям ICar
    handleSubmit, // что будет вызывать при сабмите
    formState: { errors }, //состояние формы
    clearErrors, //очищает ошибки формы
    reset, // очищает поля
    setValue, // устанавливает значения полям
    watch, //отслеивает значения эелемента формы
    control,
  } = useForm<ICar>({ defaultValues: { mark: 'wqe' } });
  const onSubmit: SubmitHandler<ICar> = (data) => {
    console.log(data);
  };
  const errorSubmit: SubmitErrorHandler<ICar> = (data) => {
    console.log(data);
  };

  const isBig = (data) => {
    //вызовется когда поле заполнено
    console.log(`Error ${data}`);
    return true; //true - все ок
  };
  return (
    <div>
      Тестирование формы
      <form onSubmit={handleSubmit(onSubmit, errorSubmit)}>
        <div>
          <label style={{ margin: '5px' }}>Модель</label>
          <input
            {...register('model', { required: true, validate: isBig })}
            type="text"
            aria-invalid={errors.model ? true : false}
          />
        </div>
        <div>
          <label style={{ margin: '5px' }}>Марка</label>
          <input {...register('mark')} type="text" />
        </div>
        <div>
          <label style={{ margin: '5px' }}>Год</label>
          <Controller
            name="year"
            control={control}
            render={({ field }) => <input {...field}></input>}
          />
        </div>
        <div>
          <button style={{ margin: '5px' }}>Отправить</button>
          <button
            type="button"
            onClick={() => clearErrors()}
            style={{ margin: '5px' }}
          >
            Очистить ошибки
          </button>
          <button
            type="button"
            onClick={() => reset({ mark: '', model: '' })}
            style={{ margin: '5px' }}
          >
            Очистить форму
          </button>
          <button
            type="button"
            onClick={() => setValue('model', 'kia')}
            style={{ margin: '5px' }}
          >
            Установить модель
          </button>
        </div>
      </form>
      {watch('model')}
    </div>
  );
};

export default FormReact;
