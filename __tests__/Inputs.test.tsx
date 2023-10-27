import { render, screen, fireEvent } from "@testing-library/react";
import Inputs from "@/app/components/sections/Perfil/Inputs";

jest.mock("@clerk/clerk-react", () => ({
  useAuth: () => ({ userId: "mockedUserId" }),
}));

jest

describe("Inputs", () => {
  it("habilita el botón cuando se llenan todos los campos", () => {
    render(<Inputs />);
    const nombreInput = screen.getByLabelText("Nombre y Apellido");
    const whatsappInput = screen.getByLabelText("Whatsapp");
    const descripcionInput = screen.getByLabelText("Description");
    const ciudadSelect = screen.getByLabelText("Tu ciudad");
    const posicionSelect = screen.getByLabelText("Tu posicion en la cancha");
    const avatarSelector = screen.getByLabelText("Selecciona tu avatar");
    const submitButton = screen.getByRole("button", { name: "Crear perfil" });

    fireEvent.change(nombreInput, { target: { value: "Juan Perez" } });
    fireEvent.change(whatsappInput, { target: { value: "1234567890" } });
    fireEvent.change(descripcionInput, {
      target: { value: "Soy un jugador de futbol" },
    });
    fireEvent.change(ciudadSelect, { target: { value: "Bogotá" } });
    fireEvent.change(posicionSelect, { target: { value: "Delantero" } });
    fireEvent.click(avatarSelector);

    expect(submitButton).toBeDisabled();

    fireEvent.click(screen.getByRole("option", { name: "Avatar 1" }));

    expect(submitButton).toBeEnabled();
  });

});