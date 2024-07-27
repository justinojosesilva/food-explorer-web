import { api } from "../service/api"

async function uploadImage({imageFile, product_id}) {
  try {
    if (imageFile) {
      const fileUploadForm = new FormData()
      fileUploadForm.append("image", imageFile)

      const response = await api.patch(`/products/avatar/${product_id}`, fileUploadForm, { withCredentials: true })
      return response.data.image
    }
  } catch (error) {
    if(error.response) {
      alert(error.response.data.message)
    } else {
      alert("Não foi possível atualizar a imagem do produto.")
    }
  }
} 

export { uploadImage }
