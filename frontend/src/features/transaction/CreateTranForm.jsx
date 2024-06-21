import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useCreateTrans } from "./useCreateTrans";
import useOutsideClick from "../../hooks/useOutsideClick";

const Form = styled.form`
  max-width: 50rem;
  background-color: var(--color-bg-lighter);
  padding: 2rem;
  font-size: 1.3rem;
  border-radius: 10px;
  /* display: grid;
  grid-template-columns: auto; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr 1fr;
  border-bottom: 1px solid var(--color-border-light);
  padding: 1.2rem 0.5rem;

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
    border: none;
  }
`;

const Input = styled.input`
  padding: 0.4rem 0.8rem;
  background-color: var(--color-input-light);
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 1px solid #00000090;
  }
`;

const Label = styled.label`
  font-weight: 550;
`;

const Select = styled.select`
  background-color: var(--color-input-light);

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #000000b9;
  border-radius: 5px;
  text-transform: capitalize;
`;

function CreateTranForm({ onClose }) {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  console.log(errors);

  const { createTrans, isCreating } = useCreateTrans();

  const ref = useOutsideClick(onClose);

  function onSubmit(data) {
    const transData = {
      ...data,
      amount: Number(data.amount),
      // date: new Date(data.date).toISOString(),
    };
    createTrans(transData);
    onClose();
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} ref={ref}>
      <FormRow>
        <Label>Title</Label>
        <Input
          type="text"
          id="title"
          {...register("title", { required: "This feild is required" })}
        />
      </FormRow>
      <FormRow>
        <Label>Description</Label>
        <Input
          type="text"
          id="description"
          {...register("description", { required: "This feild is required" })}
        />
      </FormRow>
      <FormRow>
        <Label>Amount</Label>
        <Input
          type="number"
          id="amount"
          {...register("amount", {
            required: "This feild is required",
            validate: (value) => value > 0 || "Amount cannot be less than zero",
          })}
        />
      </FormRow>
      <FormRow>
        <Label>Method</Label>
        <Select {...register("method")}>
          <option value="online">Online</option>
          <option value="cash">Cash</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label>Date</Label>
        <Input
          type="date"
          {...register("date", {
            required: "This feild is required",
          })}
        />
      </FormRow>
      <FormRow>
        <Button>submit</Button>
        <Button onClick={onClose}>Close</Button>
      </FormRow>
    </Form>
  );
}

export default CreateTranForm;
