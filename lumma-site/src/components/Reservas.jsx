import React, { useState } from "react";

function Reservas() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    data: "",
    hora: "",
    pessoas: 1,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: false }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.telefone.trim()) newErrors.telefone = true;
    if (!formData.data) newErrors.data = true;
    if (!formData.hora) newErrors.hora = true;
    if (!formData.pessoas || formData.pessoas < 1) newErrors.pessoas = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Reserva enviada com sucesso! Entraremos em contacto em breve.");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        data: "",
        hora: "",
        pessoas: 1,
      });
      setErrors({});
    }, 2000);
  };

  return (
    <section className="reservas" id="reservas" data-aos="fade-up">
      <h2>Reservas</h2>
      <p>Garanta a sua mesa com antecedência e viva uma noite inesquecível no LUMMA.</p>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="nome">Nome completo</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className={errors.nome ? "error" : ""}
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
          required
        />

        <label htmlFor="telefone">Telefone</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          className={errors.telefone ? "error" : ""}
          required
        />

        <label htmlFor="data">Data</label>
        <input
          type="date"
          id="data"
          name="data"
          value={formData.data}
          onChange={handleChange}
          className={errors.data ? "error" : ""}
          required
        />

        <label htmlFor="hora">Hora</label>
        <input
          type="time"
          id="hora"
          name="hora"
          value={formData.hora}
          onChange={handleChange}
          className={errors.hora ? "error" : ""}
          required
        />

        <label htmlFor="pessoas">Número de pessoas</label>
        <input
          type="number"
          id="pessoas"
          name="pessoas"
          min="1"
          max="20"
          value={formData.pessoas}
          onChange={handleChange}
          className={errors.pessoas ? "error" : ""}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Confirmar Reserva"}
          {loading && <span className="spinner"></span>}
        </button>
      </form>
    </section>
  );
}

export default Reservas;
